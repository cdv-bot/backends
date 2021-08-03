const express = require("express");
const productList = require("../app/controllers/productList");

const router = express.Router();

router.post("/", productList.addShow);
router.post("/delete", productList.deleteProduct);

module.exports = router;
