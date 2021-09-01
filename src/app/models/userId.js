const mongoose = require("mongoose");
const { Schema } = mongoose;

const userIdShema = Schema({
  userId: String,
  listProduct: Array,
});
const UserId = mongoose.model("Userids", userIdShema, "userids");

module.exports = UserId;
