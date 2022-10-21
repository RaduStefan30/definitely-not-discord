import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  connectSocketServer,
  getChatHistory,
} from "../../realtime/socketConnection";
import { showAlert } from "../../store/alertSlice";
import { logout } from "../../store/authSlice";

import "./Dashboard.css";
import Modal from "../../components/Modal/Modal";
import SmallSidebar from "../../components/Sidebars/SmallSidebar";
import BigSidebar from "../../components/Sidebars/BigSidebar";
import Chat from "../../components/Chat/Chat";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [displayModal, setDisplayModal] = useState(false);
  const [displayAlert, setDisplayAlert] = useState(false);

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
    </div>
  );
};

export default Dashboard;
