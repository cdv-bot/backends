const express = require("express");
const UserProduct = require("../app/controllers/UserProduct");

const userLogin = express.Router();

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
userLogin.post("/", UserProduct.addId);
userLogin.post("/login", UserProduct.login);
userLogin.post("/posttoken", verifyToken, UserProduct.postToken);
userLogin.post("/logup", UserProduct.logup);
userLogin.get("/listbuyproduct", verifyToken, UserProduct.list);
userLogin.get("/verybuy", verifyToken, UserProduct.buy);

module.exports = userLogin;
