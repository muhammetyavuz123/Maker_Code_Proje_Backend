const mongoose = require("mongoose");

const registerSchema = mongoose.Schema({
  name: String,
  surname: String,
  // mail: [{ type: mongoose.Schema.Types.ObjectId, ref: "Mail" }],
  mail: String,
  password: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("register", registerSchema);
