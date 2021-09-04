const express = require("express");
const ProductList = require("../app/controllers/controller.list");
const { verifyToken } = require("../utils/common");
const comment = express.Router();

comment.post("/", verifyToken, ProductList.commentId);
comment.get("/:idproduct", ProductList.showComment);

module.exports = comment;
