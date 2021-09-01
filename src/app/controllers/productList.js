const UserId = require("../models/userId");
const productNam = require("../models/ProductNam");
const productNu = require("../models/ProductNu");
const productBoy = require("../models/productBoy.js");
const productGirl = require("../models/ProductGirl");
const productPhuKien = require("../models/productaccessories");
const Comments = require("../models/comment");
const jwt = require("jsonwebtoken");

class ProductList {
  index(req, res) {
    res.send("new");
  }
  async addShow(req, res) {
    const { userId, listProduct } = req.body;
    if (!userId) return res.status(401).json({ error: "Không tồn tại userId" });
    const checkData = await UserId.find({ userId });
    if (checkData.length === 0) {
      res.status(401).json({ error: "Không tồn tại userId" });
    } else {
      let dataItem = [...checkData[0].listProduct];
      const index = dataItem.findIndex(function (item) {
        return (
          item.id === listProduct.id && item.numSize === listProduct.numSize
        );
      });
      if (index !== -1) {
        dataItem[index] = {
          ...dataItem[index],
          count: dataItem[index].count + 1,
        };
      } else {
        dataItem.push({
          ...listProduct,
          count: 1,
        });
      }

      await UserId.findOneAndUpdate({ userId }, { listProduct: dataItem });
      res.status(200).json({ message: "Thêm thành công", dataItem });
    }
  }

  async deleteProduct(req, res) {
    const { userId, data } = req.body;
    if (!userId) return res.status(401).json({ error: "Không tồn tại userId" });
    const checkData = await UserId.find({ userId });

    if (checkData.length === 0) {
      res.status(401).json({ error: "Không tồn tại userId" });
    } else {
      let dataItem = [...checkData[0].listProduct];
      const dataFind = dataItem.filter((item) => {
        return item.id !== data.id || item.numSize !== data.size;
      });

      await UserId.findOneAndUpdate({ userId }, { listProduct: dataFind });
      res.status(200).json({ message: "Thêm thành công", data: dataFind });
    }
  }
  async editProduct(req, res) {
    const { userId, data } = req.body;
    const { index, count } = data;
    if (!userId) return res.status(401).json({ error: "Không tồn tại userId" });
    const checkData = await UserId.find({ userId });

    if (checkData.length === 0) {
      res.status(401).json({ error: "Không tồn tại userId" });
    } else {
      let dataItem = [...checkData[0].listProduct];
      dataItem[index] = {
        ...dataItem[index],
        count,
      };
      await UserId.findOneAndUpdate({ userId }, { listProduct: dataItem });
      res.status(200).json({ message: "Thêm thành công", data: dataItem });
    }
  }
  async productNams(req, res) {
    const formatMoney = (value) => {
      const regex = /[0-9]/g;
      const stringMoney = value.match(regex).join(",").replaceAll(",", "");
      return Number(stringMoney);
    };

    const rangeStart = Number(req.query.range ? req.query.range[0] : 0);
    const rangeEnd = Number(req.query.range ? req.query.range[1] : 2000000);
    const color = req.query.color;

    let colorSize = [];
    let size = req.query.size || [];
    if (typeof size === "string") {
      colorSize = [...colorSize, size];
    } else {
      colorSize = [...size];
    }

    if (color) {
      colorSize = [...colorSize, color];
    }

    const queryField = {
      price: { $gte: rangeStart, $lte: rangeEnd },
      numberSize: { $all: colorSize },
    };

    if (size.length === 0 && !color) {
      delete queryField.numberSize;
    }

    const PAGE_SIZE = 16;
    let page = req.query.page || 1;
    if (page) {
      const skipPage = (page - 1) * PAGE_SIZE;
      productNam
        .find(queryField)
        .skip(skipPage)
        .limit(PAGE_SIZE)
        .then((data) => {
          productNam.countDocuments(queryField).exec((count_error, count) => {
            res.status(200).json({
              data,
              page: Number(page),
              totalItem: count,
              totalPage: Math.ceil(count / 16),
            });
          });
        });
    }
  }
  async productListNus(req, res) {
    const formatMoney = (value) => {
      const regex = /[0-9]/g;
      const stringMoney = value.match(regex).join(",").replaceAll(",", "");
      return Number(stringMoney);
    };

    const rangeStart = Number(req.query.range ? req.query.range[0] : 0);
    const rangeEnd = Number(req.query.range ? req.query.range[1] : 2000000);
    const color = req.query.color;

    let colorSize = [];
    let size = req.query.size || [];
    if (typeof size === "string") {
      colorSize = [...colorSize, size];
    } else {
      colorSize = [...size];
    }

    if (color) {
      colorSize = [...colorSize, color];
    }

    const queryField = {
      price: { $gte: rangeStart, $lte: rangeEnd },
      numberSize: { $all: colorSize },
    };

    if (size.length === 0 && !color) {
      delete queryField.numberSize;
    }

    const PAGE_SIZE = 16;
    let page = req.query.page || 1;
    if (page) {
      const skipPage = (page - 1) * PAGE_SIZE;
      productNu
        .find(queryField)
        .skip(skipPage)
        .limit(PAGE_SIZE)
        .then((data) => {
          productNu.countDocuments(queryField).exec((count_error, count) => {
            res.status(200).json({
              data,
              page: Number(page),
              totalItem: count,
              totalPage: Math.ceil(count / 16),
            });
          });
        });
    }
  }
  async productListBoys(req, res) {
    const formatMoney = (value) => {
      const regex = /[0-9]/g;
      const stringMoney = value.match(regex).join(",").replaceAll(",", "");
      return Number(stringMoney);
    };

    const rangeStart = Number(req.query.range ? req.query.range[0] : 0);
    const rangeEnd = Number(req.query.range ? req.query.range[1] : 2000000);
    const color = req.query.color;

    let colorSize = [];
    let size = req.query.size || [];
    if (typeof size === "string") {
      colorSize = [...colorSize, size];
    } else {
      colorSize = [...size];
    }

    if (color) {
      colorSize = [...colorSize, color];
    }

    const queryField = {
      price: { $gte: rangeStart, $lte: rangeEnd },
      numberSize: { $all: colorSize },
    };

    if (size.length === 0 && !color) {
      delete queryField.numberSize;
    }

    const PAGE_SIZE = 16;
    let page = req.query.page || 1;
    if (page) {
      const skipPage = (page - 1) * PAGE_SIZE;
      productBoy
        .find(queryField)
        .skip(skipPage)
        .limit(PAGE_SIZE)
        .then((data) => {
          productBoy.countDocuments(queryField).exec((count_error, count) => {
            res.status(200).json({
              data,
              page: Number(page),
              totalItem: count,
              totalPage: Math.ceil(count / 16),
            });
          });
        });
    }
  }
  async productListGirls(req, res) {
    const formatMoney = (value) => {
      const regex = /[0-9]/g;
      const stringMoney = value.match(regex).join(",").replaceAll(",", "");
      return Number(stringMoney);
    };

    const rangeStart = Number(req.query.range ? req.query.range[0] : 0);
    const rangeEnd = Number(req.query.range ? req.query.range[1] : 2000000);
    const color = req.query.color;

    let colorSize = [];
    let size = req.query.size || [];
    if (typeof size === "string") {
      colorSize = [...colorSize, size];
    } else {
      colorSize = [...size];
    }

    if (color) {
      colorSize = [...colorSize, color];
    }

    const queryField = {
      price: { $gte: rangeStart, $lte: rangeEnd },
      numberSize: { $all: colorSize },
    };

    if (size.length === 0 && !color) {
      delete queryField.numberSize;
    }

    const PAGE_SIZE = 16;
    let page = req.query.page || 1;
    if (page) {
      const skipPage = (page - 1) * PAGE_SIZE;
      productGirl
        .find(queryField)
        .skip(skipPage)
        .limit(PAGE_SIZE)
        .then((data) => {
          productGirl.countDocuments(queryField).exec((count_error, count) => {
            res.status(200).json({
              data,
              page: Number(page),
              totalItem: count,
              totalPage: Math.ceil(count / 16),
            });
          });
        });
    }
  }
  async productListAccessories(req, res) {
    const formatMoney = (value) => {
      const regex = /[0-9]/g;
      const stringMoney = value.match(regex).join(",").replaceAll(",", "");
      return Number(stringMoney);
    };

    const rangeStart = Number(req.query.range ? req.query.range[0] : 0);
    const rangeEnd = Number(req.query.range ? req.query.range[1] : 2000000);
    const color = req.query.color;

    let colorSize = [];
    let size = req.query.size || [];
    if (typeof size === "string") {
      colorSize = [...colorSize, size];
    } else {
      colorSize = [...size];
    }

    if (color) {
      colorSize = [...colorSize, color];
    }

    const queryField = {
      price: { $gte: rangeStart, $lte: rangeEnd },
      numberSize: { $all: colorSize },
    };

    if (size.length === 0 && !color) {
      delete queryField.numberSize;
    }

    const PAGE_SIZE = 16;
    let page = req.query.page || 1;
    if (page) {
      const skipPage = (page - 1) * PAGE_SIZE;
      productPhuKien
        .find(queryField)
        .skip(skipPage)
        .limit(PAGE_SIZE)
        .then((data) => {
          productPhuKien
            .countDocuments(queryField)
            .exec((count_error, count) => {
              res.status(200).json({
                data,
                page: Number(page),
                totalItem: count,
                totalPage: Math.ceil(count / 16),
              });
            });
        });
    }
  }
  async commentId(req, res) {
    jwt.verify(req.token, "hacker", async (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        const { comment, idProduct, username, name } = req.body;
        const data = {
          idProduct,
          comment: [
            {
              [name]: comment,
            },
          ],
        };
        const dataFind = await Comments.findOne({ idProduct });

        if (dataFind) {
          dataFind.comment.push({
            [name]: comment,
          });
          dataFind.save();
        } else {
          const comment = new Comments(data);
          comment.save();
        }
        res.status(200).json({ [name]: comment });
      }
    });
  }
  async showComment(req, res) {
    const idProduct = req.params.idproduct;
    try {
      const data = await Comments.findOne({ idProduct });
      res.status(200).json(data);
    } catch {
      res.status(401).json({
        error: "check_log",
      });
    }
  }
}

module.exports = new ProductList();
