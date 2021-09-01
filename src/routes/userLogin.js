const express = require("express");
const UserProduct = require("../app/controllers/UserProduct");

const UserLogin = express.Router();

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
UserLogin.post("/", UserProduct.addId);
UserLogin.post("/login", UserProduct.login);
UserLogin.post("/posttoken", verifyToken, UserProduct.postToken);
UserLogin.post("/logup", UserProduct.logup);
UserLogin.get("/listbuyproduct", verifyToken, UserProduct.list);
UserLogin.get("/verybuy", verifyToken, UserProduct.buy);

module.exports = UserLogin;
