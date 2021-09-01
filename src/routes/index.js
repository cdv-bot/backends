const productList = require("./ProductList");
const newsRouter = require("./News");
const siteRouter = require("./Site");
const userLogin = require("./UserLogin");
const search = require("./Search");
const comment = require("./Comment");
function route(app) {
  app.use("/product", newsRouter);
  app.use("/comment", comment);
  app.use("/", siteRouter);
  app.use("/user", userLogin);
  app.use("/productlist", productList);
  app.use("/search", search);
}

module.exports = route;
