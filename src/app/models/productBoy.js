const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productBoy = new Schema();
module.exports = mongoose.model("Productboys", productBoy);
