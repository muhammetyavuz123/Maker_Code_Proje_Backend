const mongoose = require("mongoose");

const blokSchema = mongoose.Schema({
  title: String,
  header: String
});

module.exports = mongoose.model("blok", blokSchema);
