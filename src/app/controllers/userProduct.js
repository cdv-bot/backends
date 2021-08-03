const UserId = require("../models/userId");

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
}

module.exports = new UserProduct();
