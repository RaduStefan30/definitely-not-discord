import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getChatHistory } from "../../realtime/socketConnection";

import "./Chat.css";
import { sendMessage } from "../../realtime/socketConnection";
import Messages from "./Messages";

const Chat = () => {
  const { chatDetails } = useSelector((state) => state.chat);

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (chatDetails) getChatHistory({ recipientId: chatDetails.id });
  }, [chatDetails]);

  const handleMessage = (e) => {
    e.preventDefault();
    if (message.length > 0)
      sendMessage({ recipientId: chatDetails.id, content: message });
    setMessage("");
  };

  return (
    <div className="chat">
      <h1 className="chat__heading">{chatDetails && chatDetails.username}</h1>
      <Messages key={message.date} />
      {chatDetails && (
        <form className="chat__form" onSubmit={(e) => handleMessage(e)}>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Send message</button>
        </form>
      )}
    </div>
  );
};

export default Chat;
