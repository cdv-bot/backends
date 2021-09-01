const productNam = require("../models/ProductNam");
const productNu = require("../models/ProductNu");
const productGirl = require("../models/ProductGirl");
const productBoy = require("../models/productBoy.js");
const productAccessories = require("../models/ProductAccessories");
class ProductInfo {
  comment(req, res) {
    res.send("Asd");
  }

  index(req, res) {
    res.send("new");
  }

  show(req, res) {
    const productNus = productNu.find();
    const productNams = productNam.find();
    const productGirls = productGirl.find();
    const productBoys = productBoy.find();
    const productAccessoriess = productAccessories.find();

    Promise.all([
      productNus,
      productNams,
      productGirls,
      productBoys,
      productAccessoriess,
    ]).then((values) => {
      const dataAll = values.reduce((x, y) => {
        x.push(...y);
        return x;
      }, []);
      const ids = req.params.id;
      const datas = dataAll.find((item) => {
        return item._id == ids;
      });
      res.json(datas);
    });
  }
  productList(req, res) {
    console.log("ÁD");
    // const data = req.body;
    // console.log(data);
    res.json({ d: "sdasd" });
  }
}

module.exports = new ProductInfo();
