const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderShema = Schema({
  userId: String,
  data: Object,
  product: Array,
  money: Number,
  check: Boolean,
});
const Order = mongoose.model("Orders", orderShema, "orders");
module.exports = Order;
