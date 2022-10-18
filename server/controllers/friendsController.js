const Invitation = require("../models/Invitation");
const User = require("../models/User");

const friends = require("../socketHandlers/friendsHandler");

const sendInvitation = async (req, res) => {
  const recipientEmail = req.body.email.toLowerCase();

  const { id, email } = req.user;

  if (email.toLowerCase() === recipientEmail)
    return res.status(409).send("You cannot send an invite to yourself");

  const recipient = await User.findOne({ email: recipientEmail });

  if (!recipient)
    return res.status(404).send("There is no user matching this email address");

  const alreadyInvited = await Invitation.findOne({
    senderId: id,
    recipientId: recipient._id,
  });

  if (alreadyInvited) {
    return res
      .status(409)
      .send("An invitation has already been sent to this email address");
  }

  const alreadyFriends = recipient.friends.find((recipientId) => {
    recipientId.toString() === id.toStrings;
  });

  if (alreadyFriends) {
    return res
      .status(409)
      .send("The user with this email address is already your friend");
  }

  const invitation = await Invitation.create({
    senderId: id,
    recipientId: recipient._id,
  });

  friends.updateInvitations(recipient._id.toString());

  return res.status(201).send("Invitation successfully sent");
};

module.exports = sendInvitation;
