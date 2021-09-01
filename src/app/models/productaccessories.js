const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductAccessories = new Schema();
module.exports = mongoose.model("Productaccessories", ProductAccessories);
