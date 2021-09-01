const mongoose = require("mongoose");
const { Schema } = mongoose;

const commentSchema = Schema({
  idProduct: String,
  comment: Array,
  times: Date,
});

const Comments = mongoose.model("Comments", commentSchema, "comments");

module.exports = Comments;
