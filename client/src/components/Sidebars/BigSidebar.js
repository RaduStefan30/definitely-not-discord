import { useSelector } from "react-redux";
import { IoPersonAdd } from "react-icons/io5";

import Friends from "../../components/Friend/Friends";
import Invitations from "../../components/Invitation/Invitations";

import "./BigSidebar.css";

const BigSidebar = (props) => {
  const { showModal } = props;

  const { invitations } = useSelector((state) => state.friends);

  return (
    <div className="sidebar--big">
      <button onClick={showModal} className="add-friend">
        Add friend <IoPersonAdd />
      </button>
      <div className="sidebar__content">
        <div className="sidebar__friends">
          <h3 className="sidebar__heading">Friends</h3>

          <Friends />
        </div>
        <div className="sidebar__invitations">
          <h3 className="sidebar__heading">Invitations</h3>
          {invitations && <Invitations invitations={invitations} />}
        </div>
      </div>
    </div>
  );
};

export default BigSidebar;
