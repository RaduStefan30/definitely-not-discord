import Logo from "../Logo/Logo";
import "./SmallSidebar.css";
import { BsPlusSquare } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

const SmallSidebar = () => {
  return (
    <div className="sidebar--small">
      <Logo classes="logo--small" />
      <HiUserGroup className="sidebar__group-logo" />
      <button className="sidebar__button--small">
        <BsPlusSquare />
      </button>
    </div>
  );
};

export default SmallSidebar;
