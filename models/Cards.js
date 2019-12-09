const mongoose = require("mongoose");

const cardsSchema = mongoose.Schema({
  name: String,
  surname: String,
  number: String,
  job: String,
  mail: String,
  // mail: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mail" }],
  databirth: String,
  city: String,
  district: String,
  explanation: String,
  img: { data: Buffer, contentType: String }
});
module.exports = mongoose.model("card", cardsSchema);
