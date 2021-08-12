const productList = require("./productList");
const newsRouter = require("./news");
const siteRouter = require("./site");
const userLogin = require("./userLogin");
const search = require("./search");
const comment = require("./comment");
function route(app) {
  app.use("/product", newsRouter);
  app.use("/comment", comment);
  app.use("/", siteRouter);
  app.use("/user", userLogin);
  app.use("/productlist", productList);
  app.use("/search", search);
}

module.exports = route;
