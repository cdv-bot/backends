const express = require("express");
const productList = require("../app/controllers/ProductList");

const ProductList = express.Router();

ProductList.post("/", productList.addShow);
ProductList.post("/delete", productList.deleteProduct);
ProductList.post("/edit", productList.editProduct);
ProductList.get("/nam", productList.productNams);
ProductList.get("/nu", productList.productListNus);
ProductList.get("/boy", productList.productListBoys);
ProductList.get("/girl", productList.productListGirls);
ProductList.get("/phukien", productList.productListAccessories);

module.exports = ProductList;
