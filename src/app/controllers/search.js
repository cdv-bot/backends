const fulldata = require("../models/fulldatas.js");

const NodeCache = require("node-cache");

const myCache = new NodeCache({ stdTTL: 10 });

function removeAccents(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}
class Search {
  async index(req, res) {
    const textData = req.query.key;
    if (textData) {
      const valueSearch = {
        title: { $regex: new RegExp(textData, "i") },
      };
      const data = await fulldata.find(valueSearch);
      res.status(200).json(data);
    } else {
      res.status(200).json([]);
    }
  }
}
module.exports = new Search();
