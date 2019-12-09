const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config/env_variable");

function checkToken(request, response, next) {
  const token = request.header("Authorization");

  if (!token) return response.status(401).send("you are not authorization");

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    console.log(payload);

    next();
  } catch (exceotion) {
    response.status(400).send("ınvalıd token");
  }
}
module.exports = checkToken;
