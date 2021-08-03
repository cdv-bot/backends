const express = require("express");
const siteController = require("../app/controllers/SiteController");

const router = express.Router();

router.use("/productSlideNu", siteController.productSlideNu);
router.use("/productSlideNam", siteController.productSlideNam);
router.use("/productSlideGirl", siteController.productSlideGirl);
router.use("/productSlideBoy", siteController.productSlideBoy);
router.use("/productSlideAccessories", siteController.productSlideAccessories);
router.use("/getProvince", siteController.getProvince);
router.use("/getDistrict/:id", siteController.getDistrict);
router.use("/getWard/:province/:district", siteController.getWard);

router.use("/addProducList", siteController.index);

module.exports = router;
