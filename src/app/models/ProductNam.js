const mongoose = require("mongoose");
const { Schema } = mongoose;

const productNamSchema = Schema();
const ProductNam = mongoose.model(
  "Productnams",
  productNamSchema,
  "productnams"
);
module.exports = ProductNam;
