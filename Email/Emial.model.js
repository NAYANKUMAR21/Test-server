const mongoose = require("mongoose");
const file = {
  name: { type: String },
  email: { type: String, require: true },
  body: { type: String, require: true },
};
const emailSchema = new mongoose.Schema(file);
const emailModel = mongoose.model("portfolio_Email", emailSchema);
module.exports = emailModel;
