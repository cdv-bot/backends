const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productGirl = new Schema();
module.exports = mongoose.model("productgirls", productGirl);
