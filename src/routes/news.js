const express = require("express");
const ProductInfo = require("../app/controllers/productInfo");

const news = express.Router();

news.use("/:id", ProductInfo.show);
news.use("/name", ProductInfo.index);
news.get("/comment", ProductInfo.comment);

module.exports = news;
