const mongoose = require("mongoose");

const User = mongoose.model("user", {
  email: { type: String, require: true },
  password: { type: String, require: true },
  createdAt: { type: String, default: new Date() },
});

module.exports = { User };
