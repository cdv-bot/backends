const express = require("express");
const productList = require("./productList");
const newsRouter = require("./news");
const siteRouter = require("./site");
const userLogin = require("./userLogin");
const search = require("./search");
const comment = require("./comment");
const Router = express();

Router.use("/", siteRouter);
Router.use("/product", newsRouter);
Router.use("/comment", comment);
Router.use("/user", userLogin);
Router.use("/productlist", productList);
Router.use("/search", search);

module.exports = Router;
