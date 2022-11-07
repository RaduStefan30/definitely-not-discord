import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { connectSocketServer } from "../../realtime/socketConnection";
import { logout } from "../../store/authSlice";

import "./Dashboard.css";
import Modal from "../../components/Modal/Modal";
import SmallSidebar from "../../components/Sidebars/SmallSidebar";
import BigSidebar from "../../components/Sidebars/BigSidebar";
import Chat from "../../components/Chat/Chat";
import { BsPower } from "react-icons/bs";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayModal, setDisplayModal] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (!userData) {
      return handleLogout();
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

  return (
    <div className="dashboard__container">
      {displayModal && <Modal closeModal={closeModal} />}
      <SmallSidebar />
      <BigSidebar showModal={showModal} />
      <Chat />
      <button className="logout__button" onClick={handleLogout}>
        <BsPower />
      </button>
    </div>
  );
};

export default Dashboard;
