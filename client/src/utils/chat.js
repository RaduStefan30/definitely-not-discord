import { changeChat } from "../store/chatSlice";
import store from "../store/store";

export const updateActiveChat = (data) => {
  const { interlocutors, messages } = data;

  const recipientId = store.getState().chat.chatDetails.id;

  const userId = store.getState().auth.userData.id;

  if (recipientId && userId) {
    const currentChatUsers = [recipientId, userId];

    updateActiveChatHistory({ interlocutors, currentChatUsers, messages });
  }
};

const updateActiveChatHistory = ({
  interlocutors,
  currentChatUsers,
  messages,
}) => {
  //compare chat history from server with the one from the client
  const usersMatch = interlocutors.every((id) => {
    return currentChatUsers.includes(id);
  });

  const checkDate = (firstDate, secondDate) => {
    return (
      firstDate.getFullYear() === secondDate.getFullYear() &&
      firstDate.getMonth() === secondDate.getMonth() &&
      firstDate.getDate() === secondDate.getDate()
    );
  };

  const newMessages = messages.map((message, index) => {
    const sameSender =
      index > 0 &&
      messages[index].senderId._id === messages[index - 1].senderId._id;

    const sameDate =
      index > 0 &&
      checkDate(
        new Date(messages[index].date),
        new Date(messages[index - 1].date)
      );

    return {
      id: message._id,
      content: message.content,
      username: message.senderId.username,
      type: message.type,
      date: message.date,
      sameSender: sameSender,
      sameDate: sameDate,
    };
  });

  if (usersMatch) {
    store.dispatch(
      changeChat({
        chatMessages: newMessages,
      })
    );
  }
};
