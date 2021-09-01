const express = require("express");
const ProductList = require("../app/controllers/productList");

const comment = express.Router();

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["token"];

  if (typeof bearerHeader != "undefined") {
    const bearer = bearerHeader.split(" ");

    const bearerToken = bearer[1];

    req.token = bearerToken;

    next();
  } else {
    res.sendStatus(403);
  }
}

comment.post("/", verifyToken, ProductList.commentId);
comment.get("/:idproduct", ProductList.showComment);

module.exports = comment;
