import io from "socket.io-client";
import {
  updatePendingInvitation,
  updateFriends,
  updateOnlineUsers,
} from "../store/friendsSlice";
import { store } from "../store/store";
import { updateActiveChat } from "../utils/chat";

let socket;

export const connectSocketServer = (userData) => {
  const { token } = userData;
  socket = io("http://localhost:5002", {
    auth: { token },
  });

  socket.on("invitations", (data) => {
    const { invitations } = data;
    store.dispatch(updatePendingInvitation(invitations));
  });

  socket.on("update", (data) => {
    const { friends } = data;
    store.dispatch(updateFriends(friends));
  });

  socket.on("onlineUsers", (data) => {
    const { onlineUsers } = data;
    store.dispatch(updateOnlineUsers(onlineUsers));
  });

  socket.on("chatHistory", (data) => {
    updateActiveChat(data);
  });
};

export const sendMessage = (data) => {
  socket.emit("message", data);
};

export const getChatHistory = (data) => {
  socket.emit("chatHistory", data);
};
