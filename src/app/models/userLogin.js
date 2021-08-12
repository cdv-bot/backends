const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userlogins = new Schema({
  username: String,
  password: String,
  name: String,
  role: String,
});
module.exports = mongoose.model("userlogins", userlogins);
