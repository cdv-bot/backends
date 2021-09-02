const UserId = require("../models/userId.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const UserLogin = require("../models/model.login.js");
const order = require("../models/order.js");
const md5 = require("md5");
class UserProduct {
  async addId(req, res) {
    const id = req.body.id;
    var hexCode = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    let textCode =
      hexCode() +
      hexCode() +
      "-" +
      hexCode() +
      "-" +
      hexCode() +
      "-" +
      hexCode() +
      "-" +
      hexCode() +
      hexCode() +
      hexCode();
    if (id) {
      const checkId = await UserId.find({ userId: id });
      if (checkId.length === 0) {
        res.status(401).json({ error: "userId không tồn tại" });
      } else {
        res.status(200).json(checkId[0].listProduct);
      }
    } else {
      const userIds = new UserId({
        userId: textCode,
        listProduct: [],
      });
      await userIds.save();
      res.status(200).json(textCode);
    }
  }
  async login(req, res) {
    try {
      const { password, usernames } = req.body;

      const data = await UserLogin.find({
        password: md5(password),
        username: usernames,
      });
      const { username, role, name } = data[0]?._doc;
      const userList = {
        username,
        role,
        name,
      };

      jwt.sign({ userList }, "hacker", (err, token) => {
        res.status(200).json({
          token,
        });
      });
    } catch {
      res.status(400).json({
        error: "cấm check tài khoản!.",
      });
    }
  }
  postToken(req, res) {
    jwt.verify(req.token, "hacker", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        res.json({
          message: "done",
          authData,
        });
      }
    });
  }
  async logup(req, res) {
    const { username, password, name } = req.body;
    if (username && password && name) {
      try {
        const data = await UserLogin.findOne({ username });
        if (data) {
          res.status(400).json({ error: "username tồn tại!" });
        } else {
          const dataAdd = {
            username,
            password: md5(password),
            name,
            role: "membership",
          };
          const logupSave = new UserLogin(dataAdd);
          logupSave.save();
          res.status(200).json({ message: "đã đăng ký thành công" });
        }
      } catch {
        res.status(400).json({
          error: "lỗi báo admin",
        });
      }
    } else {
      res.status(400).json({
        error: "Chưa điền đầy đủ thông tin!",
      });
    }
  }
  list(req, res) {
    jwt.verify(req.token, "hacker", (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        if (authData.userList.role === "admin") {
          order.find({}).then((data) => {
            res.status(200).json({ data });
          });
        } else {
          res.status(400).json({
            error: "không có quyền admin",
          });
        }
      }
    });
  }
  buy(req, res) {
    const id = req.query.id;
    jwt.verify(req.token, "hacker", async (err, authData) => {
      if (err) {
        res.sendStatus(403);
      } else {
        if (authData.userList.role === "admin") {
          const doc = await order.findOneAndUpdate(
            { _id: id },
            { check: true }
          );
          res.status(200).json({ data: doc });
        } else {
          res.status(400).json({
            error: "không có quyền admin",
          });
        }
      }
    });
  }
}

module.exports = new UserProduct();
