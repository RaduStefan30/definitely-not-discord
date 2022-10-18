import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import EntryButton from "../../components/Entry/EntryButton";
import InputField from "../../components/InputField/InputField";
import { connectSocketServer } from "../../realtime/socketConnection";
import { showAlert } from "../../store/alertSlice";
import { logout } from "../../store/authSlice";
import { sendFriendInvitation } from "../../store/friendsSlice";

import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const userDetails = useSelector((state) => state.auth.userData);
  // console.log(userDetails);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (!userData) {
      handleLogout();
    }
    connectSocketServer(JSON.parse(userData));
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate("../login");
  };

  const showModal = () => {
    setDisplayModal(true);
  };

  const closeModal = () => {
    setDisplayModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendFriendInvitation({ email }));
  };

  const acceptInvitation = () => {};

  const declineInvitation = () => {};

  return (
    <div className="dashboard__container">
      {displayModal && (
        <Fragment>
          <div className="overlay">&nbsp;</div>
          <form className="modal" onSubmit={(e) => handleSubmit(e)}>
            <button className="modal__close" onClick={closeModal}>
              &times;
            </button>
            <p className="modal__text">
              Enter the email address of the friend you want to add:
            </p>
            <InputField
              value={email}
              setValue={setEmail}
              label=""
              type="text"
              placeholder="radu@test.com"
            />
            <EntryButton text={"Send invite"} />
          </form>
        </Fragment>
      )}
      <div className="sidebar--small">
        <button>Main Button</button>
      </div>
      <div className="sidebar--big">
        <button onClick={showModal}>Add friend</button>
        <div className="sidebar_content">
          <div>
            <p>Private messages</p>
            <div>
              <span>Prieten </span>
              <span>Online</span>
            </div>
          </div>
          <div>
            <div>
              <div>Invitations</div>
              <div>
                Mare boss<button onClick={acceptInvitation}>Yes</button>
                <button onClick={declineInvitation}>No</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="chat">
        <button className="logout__button" onClick={handleLogout}>
          logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
