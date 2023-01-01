const mongoose = require("mongoose");
const file = {
  email: { type: String, require: true },
  password: { type: String, require: true },
};
const loginSchema = new mongoose.Schema(file);
const loginModel = mongoose.model("auth", loginSchema);
module.exports = loginModel;
