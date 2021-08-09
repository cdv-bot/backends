const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const fulldatas = new Schema();
module.exports = mongoose.model("fulldatas", fulldatas);
