const express = require("express");
const search = require("../app/controllers/Search");

const searchs = express.Router();

searchs.get("/product", search.index);

module.exports = searchs;
