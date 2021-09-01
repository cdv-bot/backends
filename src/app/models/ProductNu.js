const mongoose = require("mongoose");
const { Schema } = mongoose;

const productNuSchema = Schema();
const ProductNu = mongoose.model("Productnus", productNuSchema, "productnus");
module.exports = ProductNu;
