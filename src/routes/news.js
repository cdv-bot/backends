const express = require("express");
const productInfo = require("../app/controllers/productInfo");

const news = express.Router();

news.use("/:id", productInfo.show);
news.use("/name", productInfo.index);
news.get("/comment", productInfo.comment);

module.exports = news;
