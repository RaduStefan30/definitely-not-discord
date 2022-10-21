import Moment from "react-moment";

import "./Message.css";

const Message = (props) => {
  const { chatUser, message } = props;

  return (
    <div
      className={
        chatUser === message.username ? "message--left" : "message--right"
      }
    >
      {message.date && !message.sameDate && (
        <Moment format="DD MMM YYYY">{message.date}</Moment>
      )}
      {(!message.sameSender || !message.sameDate) && message.username}
      {message.content}
    </div>
  );
};

export default Message;
