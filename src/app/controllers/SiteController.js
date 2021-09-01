const productNam = require("../models/ProductNam");
const productNu = require("../models/productNu");
const productGirl = require("../models/ProductGirl");
const productBoy = require("../models/productBoy.js");
const productAccessories = require("../models/productaccessories");
const Order = require("../models/order");
const UserId = require("../models/userId");
const axios = require("axios");
class NewController {
  index(req, res) {
    console.log(req.body);
    res.status(200).json({ a: "AD" });
  }
  productSlideNu(req, res) {
    productNu.find({}, function (err, docs) {
      if (!err) {
        let data = docs.slice(0, 16);
        res.json(data);
        return;
      }
      res.status(400).json({ error: "error" });
    });
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
  getProvince(req, res) {
    axios
      .post("https://gw-gddt.baohiemxahoi.gov.vn/api/getDmtinhthanh")
      .then((x) => res.json(x.data))
      .catch((x) => {
        res.status(400).json({ error: "error" });
      });
  }
  getDistrict(req, res) {
    const id = req.params.id;
    axios
      .post("https://gw-gddt.baohiemxahoi.gov.vn/api/getDmquanhuyen", {
        matinh: id,
      })
      .then((x) => res.json(x.data))
      .catch(() =>
        res.status(400).json({
          message: "vui lòng thêm mã tỉnh",
          status: "error",
        })
      );
  }

  getWard(req, res) {
    const province = req.params.province;
    const district = req.params.district;
    axios
      .post("https://gw-gddt.baohiemxahoi.gov.vn/api/getDmphuongxa", {
        matinh: province,
        mahuyen: district,
      })
      .then((x) => res.json(x.data))
      .catch(() =>
        res.status(400).json({
          message: "vui lòng thêm mã tỉnh",
          status: "error",
        })
      );
  }
  async order(req, res) {
    const order = new Order({
      ...req.body,
    });
    await order.save();
    await UserId.findOneAndUpdate(
      { userId: req.body.userId },
      { listProduct: [] }
    );
    res.status(200).json({
      message: "Đã thành công.",
      data: req.body,
    });
  }
}

module.exports = new NewController();
