const express = require("express");
const productList = require("../app/controllers/ProductList");

const router = express.Router();

router.post("/", productList.addShow);
router.post("/delete", productList.deleteProduct);
router.post("/edit", productList.editProduct);
router.get("/nam", productList.productNams);
router.get("/nu", productList.productListNus);
router.get("/boy", productList.productListBoys);
router.get("/girl", productList.productListGirls);
router.get("/phukien", productList.productListAccessories);

module.exports = router;
