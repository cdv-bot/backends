const productNam = require("../models/product.nam.js");
const productNus = require("../models/product.nu.js");
const productGirl = require("../models/product.girl.js");
const productBoy = require("../models/product.boy.js");
const productAccessories = require("../models/product.accessories.js");
const Order = require("../models/order.js");
const UserId = require("../models/userId.js");
const Cancelorder = require("../models/cancelorder.js");
const axios = require("axios");
class NewController {
  index(req, res) {
    res.status(200).json({ a: "AD" });
  }
  productSlideNu(req, res) {
    productNus.find({}, function (err, docs) {
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
    try {
      const { userId, data } = req.body;
      const provinceData = axios.post(
        "https://gw-gddt.baohiemxahoi.gov.vn/api/getDmtinhthanh"
      );
      const getDistrict = axios.post(
        "https://gw-gddt.baohiemxahoi.gov.vn/api/getDmquanhuyen",
        {
          matinh: data.data.province,
        }
      );

      const getWards = axios.post(
        "https://gw-gddt.baohiemxahoi.gov.vn/api/getDmphuongxa",
        {
          matinh: data.data.province,
          mahuyen: data.data.district,
        }
      );

      const datas = await Promise.all([provinceData, getDistrict, getWards]);

      const { ten: tinh } = datas[0].data.find(
        (item) => item.matinh === data.data.province
      );
      const { ten: huyen } = datas[1].data.find(
        (item) => item.mahuyen === data.data.district
      );
      const { ten: maphuongxa } = datas[2].data.find(
        (item) => item.maphuongxa === data.data.wards
      );

      const dataVal = {
        checkout: data.checkorder,
        info: data.data,
        money: data.money,
        product: data.product,
        userId,
        tinh,
        huyen,
        maphuongxa,
        address: data.data.address,
      };

      console.log(dataVal);
      const order = new Order(dataVal);
      await order.save();
      await UserId.findOneAndUpdate(
        { userId: req.body.userId },
        { listProduct: [] }
      );
      res.status(200).json({
        message: "Đã thành công.",
        data: req.body,
      });
    } catch {}
  }
  async listorder(req, res) {
    try {
      const id = req.body.id;
      console.log(id);
      const data = await Order.find({ userId: id }, [
        "product",
        "money",
        "checkout",
      ]).lean();
      res.status(200).json({ data });
    } catch {
      res.status(401).json({ errorMessage: "Báo admin" });
    }
  }
  async listAdmin(req, res) {
    try {
      const data = await Order.find({ checkout: false });
      res.status(200).json({ data });
    } catch {
      res.status(401).json({ errorMessage: "Báo admin" });
    }
  }
  async ordertransport(req, res) {
    try {
      const userId = req.query.id;
      const data = await Order.find({
        userId,
        checkout: true,
      });
      res.status(200).json(data);
    } catch {
      res.status(401).json({ errorMessage: "Báo admin" });
    }
  }
  async uporder(req, res) {
    try {
      const id = req.body.id;
      await Order.updateOne({ _id: id }, { checkout: true });
      res.status(200).json("done");
    } catch {
      res.status(401).json({ errorMessage: "Báo admin" });
    }
  }
  async cancelAdmin(req, res) {
    try {
      const data = req.body.data;
      await Order.deleteOne({ _id: data._id });

      const cacel = new Cancelorder(data);
      await cacel.save();

      res.status(200).json("done");
    } catch {
      res.status(402).json({ errorMessage: "Báo admin" });
    }
  }
  async listcancel(req, res) {
    try {
      const userId = req.query.id;
      const data = await Cancelorder.find({
        userId,
      });
      res.status(200).json(data);
    } catch {
      res.status(401).json({ errorMessage: "Báo admin" });
    }
  }
}

module.exports = new NewController();
