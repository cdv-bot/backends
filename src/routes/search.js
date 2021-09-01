const express = require("express");
const search = require("../app/controllers/Search");

const Search = express.Router();

Search.get("/product", search.index);

module.exports = Search;
