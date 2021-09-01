const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductBoy = new Schema();
module.exports = mongoose.model("Productboys", ProductBoy);
