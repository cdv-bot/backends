const express = require("express");
const UserProduct = require("../app/controllers/UserProduct");

const router = express.Router();

router.post("/", UserProduct.addId);

module.exports = router;
