const express = require("express");
const UserProduct = require("../app/controllers/UserProduct");

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
router.post("/", UserProduct.addId);
router.post("/login", UserProduct.login);
router.post("/posttoken", verifyToken, UserProduct.postToken);
router.post("/logup", UserProduct.logup);
router.get("/listbuyproduct", verifyToken, UserProduct.list);
router.get("/verybuy", verifyToken, UserProduct.buy);

module.exports = router;