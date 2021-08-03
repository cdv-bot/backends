const productNam = require("../models/ProductNam");
const productNu = require("../models/ProductNu");
const productGirl = require("../models/productGirl");
const productBoy = require("../models/productBoy");
const productAccessories = require("../models/productAccessories");
const axios = require("axios");
class NewController {
  index(req, res) {
    console.log(req.body);
    res.status(200).json({ a: "AD" });
  }
  productSlideNu(req, res) {
    // const PAGE_SIZE = 16;
    // let page = req.query.page || 1;
    // if (page) {
    //   const skipPage = (page - 1) * PAGE_SIZE;
    //   productNu
    //     .find({})
    //     .skip(skipPage)
    //     .limit(PAGE_SIZE)
    //     .then((data) => {
    //       productNu.countDocuments({}).exec((count_error, count) => {
    //         res.json({
    //           data,
    //           page: Number(page),
    //           totalPage: Math.ceil(count / 16),
    //         });
    //       });
    //     });
    // }
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
}

module.exports = new NewController();
