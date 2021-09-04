const mongoose = require("mongoose");
const { Schema } = mongoose;

const fulldatasSchema = Schema({
  _id: String,
});

const FullData = mongoose.model("Fulldatas", fulldatasSchema, "fulldatas");
module.exports = FullData;
