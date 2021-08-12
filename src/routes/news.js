const express = require("express");
const ProductInfo = require("../app/controllers/ProductInfo");

const router = express.Router();

router.use("/:id", ProductInfo.show);
router.use("/name", ProductInfo.index);
router.get("/comment", ProductInfo.comment);

module.exports = router;
