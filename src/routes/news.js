const express = require("express");
const ProductInfo = require("../app/controllers/ProductInfo");

const News = express.Router();

News.use("/:id", ProductInfo.show);
News.use("/name", ProductInfo.index);
News.get("/comment", ProductInfo.comment);

module.exports = News;
