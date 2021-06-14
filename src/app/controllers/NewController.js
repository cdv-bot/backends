class NewController {
  index(req, res) {
    res.send("new");
  }
  show(req, res) {
    res.send(req);
  }
}

module.exports = new NewController();
