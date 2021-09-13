const express = require("express");
const siteController = require("../app/controllers/controller.site");
const jwt = require("jsonwebtoken");
const site = express.Router();

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
      if (authData.userList.role === "admin") {
        res.sendStatus(401);
      } else {
        next();
      }
    }
  });
}
function verifyTokenAdmin(req, res, next) {
  const bearerHeader = req.query.token;

  if (typeof bearerHeader != "undefined") {
    const bearer = bearerHeader.split(" ");

    const bearerToken = bearer[1];

    req.token = bearerToken;

    next();
  } else {
    res.sendStatus(403);
  }
}
function authTokenAdmin(req, res, next) {
  jwt.verify(req.token, "hacker", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      req.data = authData;

      next();
    }
  });
}
site.use("/productSlideNu", siteController.productSlideNu);
site.use("/productSlideNam", siteController.productSlideNam);
site.use("/productSlideGirl", siteController.productSlideGirl);
site.use("/productSlideBoy", siteController.productSlideBoy);
site.use("/productSlideAccessories", siteController.productSlideAccessories);
site.use("/getProvince", siteController.getProvince);
site.use("/getDistrict/:id", siteController.getDistrict);
site.use("/getWard/:province/:district", siteController.getWard);

site.post("/listorder", siteController.listorder);
site.get(
  "/listadmin",
  verifyTokenAdmin,
  authTokenAdmin,
  siteController.listAdmin
);
site.get("/listcancel", siteController.listcancel);
site.post("/canceladmin", siteController.cancelAdmin);
site.post("/uporder", verifyToken, authTokenAdmin, siteController.uporder);

site.get("/ordertransport", siteController.ordertransport);
site.use("/addProducList", siteController.index);
site.post("/order", siteController.order);
module.exports = site;
