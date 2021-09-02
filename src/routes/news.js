const express = require("express");
const ProductInfos = require("../app/controllers/productInfo");

const news = express.Router();

news.use("/:id", ProductInfos.show);
news.use("/name", ProductInfos.index);
news.get("/comment", ProductInfos.comment);

module.exports = news;
