const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productNam = new Schema();
module.exports = mongoose.model("Productnams", productNam);
