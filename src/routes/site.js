const express = require("express");
const siteController = require("../app/controllers/SiteController");

const Site = express.Router();

Site.use("/productSlideNu", siteController.productSlideNu);
Site.use("/productSlideNam", siteController.productSlideNam);
Site.use("/productSlideGirl", siteController.productSlideGirl);
Site.use("/productSlideBoy", siteController.productSlideBoy);
Site.use("/productSlideAccessories", siteController.productSlideAccessories);
Site.use("/getProvince", siteController.getProvince);
Site.use("/getDistrict/:id", siteController.getDistrict);
Site.use("/getWard/:province/:district", siteController.getWard);

Site.use("/addProducList", siteController.index);
Site.post("/order", siteController.order);
module.exports = Site;
