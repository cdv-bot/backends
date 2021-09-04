const productNam = require("../models/product.nam");
const productNu = require("../models/product.nu");
const productGirl = require("../models/product.girl");
const productBoy = require("../models/product.boy");
const dataFull = require("../models/fulldata");
const productAccessories = require("../models/product.accessories");

class ProductInfo {
  comment(req, res) {
    res.send("Asd");
  }

  index(req, res) {
    res.send("new");
  }

  async show(req, res) {
    try {
      const numberid = req.params.numberid;
      const data = await dataFull.findOne({ maSp: numberid });
      res.json(data);
    } catch {
      res.status(401);
    }
  }
  productList(req, res) {
    console.log("ÁD");
    // const data = req.body;
    // console.log(data);
    res.json({ d: "sdasd" });
  }
}

module.exports = new ProductInfo();
