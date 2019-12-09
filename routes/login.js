const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const _ = require("lodash");

const registerModel = require("../models/Register");
const { JWT_SECRET } = require("../config/env_variable");

router.post("/", async (request, response) => {
  const mail = request.body.mail;
  const password = request.body.password;

  const user = await registerModel.findOne({ mail: mail });

  if (!user) return response.status(404).send("invalid email or pasword");

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid)
    return response.status(400).send("invalid email or pasword");

  const token = jwt.sign(_.pick(user, ["mail"]), JWT_SECRET); //sor

  return response.header("Authorization", token).send(); //sor
});

module.exports = router;
