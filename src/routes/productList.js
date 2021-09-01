const express = require("express");
const productList = require("../app/controllers/ProductList");

const productLists = express.Router();

productLists.post("/", productList.addShow);
productLists.post("/delete", productList.deleteProduct);
productLists.post("/edit", productList.editProduct);
productLists.get("/nam", productList.productNams);
productLists.get("/nu", productList.productListNus);
productLists.get("/boy", productList.productListBoys);
productLists.get("/girl", productList.productListGirls);
productLists.get("/phukien", productList.productListAccessories);

module.exports = productLists;
