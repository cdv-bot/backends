const express = require("express");
const productList = require("../app/controllers/productList");

const router = express.Router();
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["token"];

  if (typeof bearerHeader != "undefined") {
    const bearer = bearerHeader.split(" ");

    const bearerToken = bearer[1];

    req.token = bearerToken;

    next();
  } else {
    res.sendStatus(403);
  }
}

router.post("/", verifyToken, productList.commentId);
router.get("/:idproduct", productList.showComment);

module.exports = router;
