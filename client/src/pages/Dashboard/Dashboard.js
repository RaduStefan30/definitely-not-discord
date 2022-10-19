import { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import EntryButton from "../../components/Entry/EntryButton";
import InputField from "../../components/InputField/InputField";
import { connectSocketServer } from "../../realtime/socketConnection";
import { showAlert } from "../../store/alertSlice";
import { logout } from "../../store/authSlice";
import {
  sendFriendInvitation,
  acceptInvitation,
  declineInvitation,
} from "../../store/friendsSlice";

import "./Dashboard.css";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { friends, invitations, onlineUsers } = useSelector(
    (state) => state.friends
  );

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

  const accept = (id) => {
    dispatch(acceptInvitation(id));
  };

  const decline = (id) => {
    dispatch(declineInvitation(id));
  };

  const getUsers = (friends = [], onlineUsers = []) => {
    const allFriends = friends.map((friend) => {
      const isUserOnline = onlineUsers.find(
        (user) => user.userId === friend.id
      );
      const isOnline = isUserOnline ? true : false;
      return { ...friend, isOnline };
    });
    return allFriends;
  };

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
            {friends &&
              getUsers(friends, onlineUsers).map((friend) => {
                return (
                  <div key={friend.id}>
                    <span>{friend.username} </span>
                    <span>{friend.isOnline && "online"}</span>
                  </div>
                );
              })}
          </div>
          <div>
            <div>Invitations:</div>
            <div>
              {invitations &&
                invitations.map((invitation) => {
                  return (
                    <div key={invitation.senderId._id}>
                      {invitation.senderId.username}
                      <button onClick={() => accept(invitation._id)}>
                        Yes
                      </button>
                      <button onClick={() => decline(invitation._id)}>
                        No
                      </button>
                    </div>
                  );
                })}
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
