const express = require("express");
const jwt = require("jsonwebtoken");
const UserProduct = require("../app/controllers/controller.user");

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
function authToken(req, res, next) {
  jwt.verify(req.token, "hacker", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      req.data = authData;
      next();
    }
  });
}
userLogin.post("/", UserProduct.addId);
userLogin.post("/login", UserProduct.login);
userLogin.post("/posttoken", verifyToken, authToken, UserProduct.postToken);
userLogin.post("/logup", UserProduct.logup);
userLogin.get("/listbuyproduct", verifyToken, UserProduct.list);
userLogin.get("/verybuy", verifyToken, UserProduct.buy);

module.exports = userLogin;
