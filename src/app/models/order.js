const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const order = new Schema({
  userId: String,
  data: Object,
  product: Array,
  money: Number,
});
module.exports = mongoose.model("Orders", order);
