const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userId = new Schema({
  userId: String,
  listProduct: Array,
});
module.exports = mongoose.model("userids", userId);
