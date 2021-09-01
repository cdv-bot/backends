const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchemaAccessories = Schema();
const Productaccessories = mongoose.model(
  "Productaccessories",
  productSchemaAccessories,
  "productaccessories"
);
module.exports = Productaccessories;
