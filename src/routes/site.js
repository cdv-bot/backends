const express = require("express");
const siteController = require("../app/controllers/SiteController");

const router = express.Router();

router.use("/productSlideNu", siteController.productSlideNu);
router.use("/productSlideNam", siteController.productSlideNam);
router.use("/productSlideGirl", siteController.productSlideGirl);
router.use("/productSlideBoy", siteController.productSlideBoy);
router.use("/productSlideAccessories", siteController.productSlideAccessories);
router.use("/v1", siteController.index);

module.exports = router;
