const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productNu = new Schema();
module.exports = mongoose.model("Productnus", productNu);
