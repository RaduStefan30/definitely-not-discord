const User = require("../models/User");
const Invitation = require("../models/Invitation");
const serverStore = require("../serverStore");

const updateInvitations = async (id) => {
  try {
    const invitations = await Invitation.find({
      recipientId: id,
    }).populate("senderId", "_id email username");

    const usersList = serverStore.getActiveConnections(id);

    const io = serverStore.getSocketInstance();

    usersList.forEach((socketId) => {
      io.to(socketId).emit("invitations", { invitations: invitations || [] });
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { updateInvitations };
