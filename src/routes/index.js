const productList = require("./productList");
const newsRouter = require("./news");
const siteRouter = require("./site");
const userLogin = require("./userLogin");
function route(app) {
  app.use("/product", newsRouter);
  app.use("/", siteRouter);
  app.use("/user", userLogin);
  app.use("/productlist", productList);
}

module.exports = route;
