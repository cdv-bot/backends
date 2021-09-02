const express = require("express");
const ProductInfos = require("../app/controllers/controller.info.js");

const news = express.Router();

news.use("/:id", ProductInfos.show);
news.use("/name", ProductInfos.index);
news.get("/comment", ProductInfos.comment);

module.exports = news;
