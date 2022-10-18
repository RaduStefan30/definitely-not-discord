import io from "socket.io-client";

export const connectSocketServer = (userData) => {
  const { token } = userData;
  const socket = io("http://localhost:5002", {
    auth: { token },
  });

  socket.on("connect", () => {
    console.log("client connected id:", socket.id);
  });

  socket.on("invitations", (data) => {
    const { invitations } = data;
    console.log(data);
  });
};
