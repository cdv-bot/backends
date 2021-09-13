const mongoose = require("mongoose");
const { Schema } = mongoose;

const cancelOrderShema = Schema({
  _id: String,
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
const cancelOrder = mongoose.model(
  "Cancelorders",
  cancelOrderShema,
  "cancelorders"
);
module.exports = cancelOrder;
