const express = require("express");
const ProductInfos = require("../app/controllers/controller.info");

const news = express.Router();

news.get("/:numberid", ProductInfos.show);
news.use("/name", ProductInfos.index);
news.get("/comment", ProductInfos.comment);

module.exports = news;
