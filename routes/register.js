const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerModel = require("../models/Register");

router.post("/", async (request, response) => {
  const user = new registerModel(request.body);

  const salt = bcrypt.genSaltSync();
  user.password = bcrypt.hashSync(user.password, salt);

  const saved = await user.save();

  response.send(saved);
});

module.exports = router;
