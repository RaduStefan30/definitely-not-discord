import { Fragment } from "react";
import Moment from "react-moment";

import "./Message.css";

const Message = (props) => {
  const { chatUser, message } = props;

  return (
    <Fragment>
      {message.date && !message.sameDate && (
        <div className="message__date">
          <Moment format="DD MMM YYYY">{message.date}</Moment>
        </div>
      )}
      <div
        className={
          chatUser === message.username
            ? "message message--left"
            : "message message--right"
        }
      >
        {message.content}
      </div>
    </Fragment>
  );
};

export default Message;
