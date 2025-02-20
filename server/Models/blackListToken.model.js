const mongoose = require("mongoose");

const blackListTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // Token will be removed after 1 day
  },
});

const BlackListToken = mongoose.model("BlackListToken", blackListTokenSchema);

module.exports = BlackListToken;
