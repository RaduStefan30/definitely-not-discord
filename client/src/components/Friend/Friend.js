import "./Friend.css";
import { BsFillCircleFill } from "react-icons/bs";

const Friend = (props) => {
  const { handleChat, friend } = props;
  return (
    <button
      className="friend__conversation-button"
      onClick={() => handleChat(friend.id, friend.username)}
    >
      <span className="friend__username">{friend.username} </span>
      <span className="online">{friend.isOnline && <BsFillCircleFill />}</span>
    </button>
  );
};

export default Friend;
