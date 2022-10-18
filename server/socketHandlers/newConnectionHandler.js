const serverStore = require("../serverStore");

const newConnectionHandler = async (socket, io) => {
  const userData = socket.user;
  //might need error handling
  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userData.id,
  });
};

module.exports = newConnectionHandler;
