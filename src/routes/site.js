const express = require("express");
const siteController = require("../app/controllers/SiteController");

const site = express.Router();

site.use("/productSlideNu", siteController.productSlideNu);
site.use("/productSlideNam", siteController.productSlideNam);
site.use("/productSlideGirl", siteController.productSlideGirl);
site.use("/productSlideBoy", siteController.productSlideBoy);
site.use("/productSlideAccessories", siteController.productSlideAccessories);
site.use("/getProvince", siteController.getProvince);
site.use("/getDistrict/:id", siteController.getDistrict);
site.use("/getWard/:province/:district", siteController.getWard);

site.use("/addProducList", siteController.index);
site.post("/order", siteController.order);
module.exports = site;
