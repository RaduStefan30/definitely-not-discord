import { ImCheckmark, ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";

import { acceptInvitation, declineInvitation } from "../../store/friendsSlice";

import "./Invitation.css";

const Invitation = (props) => {
  const dispatch = useDispatch();

  const { invitation } = props;

  const accept = (id) => {
    dispatch(acceptInvitation(id));
  };

  const decline = (id) => {
    dispatch(declineInvitation(id));
  };

  return (
    <div className="invitation__container">
      <span className="invitation__username">
        {invitation.senderId.username}
      </span>
      <span className="invitation__buttons">
        <button
          className="invitation__button"
          onClick={() => accept(invitation._id)}
        >
          <ImCheckmark />
        </button>
        <button
          className="invitation__button"
          onClick={() => decline(invitation._id)}
        >
          <ImCross />
        </button>
      </span>
    </div>
  );
};

export default Invitation;
