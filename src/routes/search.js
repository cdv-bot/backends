const express = require("express");
const search = require("../app/controllers/controller.search");

const searchs = express.Router();

searchs.get("/product", search.index);

module.exports = searchs;
