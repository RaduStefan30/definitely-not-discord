import "./Friend.css";
import { BsFillCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Friend = (props) => {
  const { handleChat, friend } = props;
  const { chatDetails } = useSelector((state) => state.chat);

  return (
    <button
      className={`friend__conversation-button ${
        chatDetails &&
        chatDetails.username === friend.username &&
        "friend__chatting"
      }`}
      onClick={() => handleChat(friend.id, friend.username)}
    >
      <span className="friend__username">{friend.username} </span>
      <span className="online">{friend.isOnline && <BsFillCircleFill />}</span>
    </button>
  );
};

export default Friend;
