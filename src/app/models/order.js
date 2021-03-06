const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderShema = Schema({
  checkout: Boolean,
  tinh: String,
  huyen: String,
  maphuongxa: String,
  product: Array,
  money: Number,
  info: Object,
  userId: String,
  address: String,
});
const Order = mongoose.model("Orders", orderShema, "orders");
module.exports = Order;
