const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comments = new Schema({
  idProduct: String,
  comment: Array,
  times: Date,
});
module.exports = mongoose.model("comments", comments);
