const express = require("express");
const joi = require("joi");
const validator = require("express-joi-validation").createValidator({});

const auth = require("../middleware/auth");
const sendInvitation = require("../controllers/friendsController");

const router = express.Router();

const invitationSchema = joi.object({
  email: joi.string().email().required(),
});

router.post("/invite", auth, validator.body(invitationSchema), sendInvitation);

module.exports = router;
