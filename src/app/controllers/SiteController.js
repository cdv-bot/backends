const productNam = require("../models/ProductNam");
const productNu = require("../models/ProductNu");
const productGirl = require("../models/productGirl");
const productBoy = require("../models/productBoy");
const productAccessories = require("../models/productAccessories");
class NewController {
  index(req, res) {
    console.log(Course);
    res.send(Course);
  }
  productSlideNu(req, res) {
    const PAGE_SIZE = 16;
    let page = req.query.page;
    if (page) {
      const skipPage = (page - 1) * PAGE_SIZE;
      productNu
        .find({})
        .skip(skipPage)
        .limit(PAGE_SIZE)
        .then((data) => {
          productNu.countDocuments({}).exec((count_error, count) => {
            res.json({
              data,
              page,
              totalPage: Math.ceil(count / 16),
            });
          });
        });
    }
    // productNu.find({}, function (err, docs) {
    //   if (!err) {
    //     let data = docs.slice(0, 16);
    //     res.json(data);
    //     return;
    //   }
    //   res.status(400).json({ error: "error" });
    // });
  }
  productSlideNam(req, res) {
    productNam.find({}, function (err, docs) {
      if (!err) {
        let data = docs.slice(0, 16);
        res.json(data);
        return;
      }
      res.status(400).json({ error: "error" });
    });
  }
  productSlideGirl(req, res) {
    productGirl.find({}, function (err, docs) {
      if (!err) {
        let data = docs.slice(0, 16);
        res.json(data);
        return;
      }
      res.status(400).json({ error: "error" });
    });
  }
  productSlideBoy(req, res) {
    productBoy.find({}, function (err, docs) {
      if (!err) {
        let data = docs.slice(0, 16);
        res.json(data);
        return;
      }
      res.status(400).json({ error: "error" });
    });
  }
  productSlideAccessories(req, res) {
    productAccessories.find({}, function (err, docs) {
      if (!err) {
        let data = docs.slice(0, 16);
        res.json(data);
        return;
      }
      res.status(400).json({ error: "error" });
    });
  }
}

module.exports = new NewController();
