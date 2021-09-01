const mongoose = require("mongoose");
const { Schema } = mongoose;

const fulldatasSchema = Schema();

const FullData = mongoose.model("Fulldatas", fulldatasSchema, "fulldatas");
module.exports = FullData;
