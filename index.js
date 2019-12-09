const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// const _ = require("lodash");

mongoose
  .connect("mongodb://localhost:27017/halisaha", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DataBase Başarılı bir şekilde bağlanıldı."))
  .catch(err => console.log("Error", err));

const cardRouter = require("./routes/cards");
const blogRouter = require("./routes/blok");
const registerRouter = require("./routes/register");
const loginRegister = require("./routes/login");

app.use(express.json());
app.use(cors({ exposedHeaders: ["Authorization"] }));

app.use("/cards", cardRouter);
app.use("/blok", blogRouter);
app.use("/register", registerRouter);
app.use("/login", loginRegister);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server: ${PORT}`);
});
