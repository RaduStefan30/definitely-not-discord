import { useSelector } from "react-redux";

import "./Messages.css";
import Message from "./Message";

const Messages = () => {
  const { chatDetails, chatMessages } = useSelector((state) => state.chat);
  return (
    chatDetails &&
    chatMessages && (
      <div className="messages__container">
        {chatMessages.map((message) => {
          return (
            <Message
              chatUser={chatDetails.username}
              message={message}
              key={message.date}
            />
          );
        })}
      </div>
    )
  );
};
export default Messages;
