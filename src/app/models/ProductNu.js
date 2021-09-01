const mongoose = require("mongoose");
const { Schema } = mongoose;

const productNuSchema = Schema();
const ProductNus = mongoose.model("Productnus", productNuSchema, "productnus");
module.exports = ProductNus;
