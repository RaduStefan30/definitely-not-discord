import io from "socket.io-client";
import {
  updatePendingInvitation,
  updateFriends,
  updateOnlineUsers,
} from "../store/friendsSlice";
import { store } from "../store/store";

export const connectSocketServer = (userData) => {
  const { token } = userData;
  const socket = io("http://localhost:5002", {
    auth: { token },
  });

  // socket.on("connect", () => {
  // });

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
};
