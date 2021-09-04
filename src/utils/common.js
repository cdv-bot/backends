function verifyToken(req, res, next) {
  const bearerHeader = req.headers["token"];

  if (typeof bearerHeader === "undefined") return res.sendStatus(403);

  const bearer = bearerHeader.split(" ");

  const bearerToken = bearer[1];

  req.token = bearerToken;

  next();
}

module.exports = {
  verifyToken,
};
