const express = require("express");
const search = require("../app/controllers/search");

const router = express.Router();

router.get("/product", search.index);

module.exports = router;
