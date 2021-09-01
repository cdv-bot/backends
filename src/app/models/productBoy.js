const mongoose = require("mongoose");
const { Schema } = mongoose;

const productBoySchema = Schema();

const ProductBoy = mongoose.model(
  "Productboys",
  productBoySchema,
  "productboys"
);
module.exports = ProductBoy;
