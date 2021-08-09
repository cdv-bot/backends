const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productAccessories = new Schema();
module.exports = mongoose.model("productaccessories", productAccessories);
