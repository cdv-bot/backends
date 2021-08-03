const UserId = require("../models/userId");
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
}

module.exports = new ProductList();
