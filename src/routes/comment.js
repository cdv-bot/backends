const express = require("express");
const ProductList = require("../app/controllers/ProductList");

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

router.post("/", verifyToken, ProductList.commentId);
router.get("/:idproduct", ProductList.showComment);

module.exports = router;
