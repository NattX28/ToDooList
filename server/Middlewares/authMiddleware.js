const jwt = require("jsonwebtoken");

exports.authMiddleWare = async (req, res, next) => {
  try {
    const token = req.headers["authtoken"];
    if (!token) return res.status(401).send("No token");

    const decoded = jwt.verify(token, "jwtsecret");
    req.user = decoded.user;

    next();
  } catch (err) {
    console.log(err);
    res.send("Token Invalid").status(500);
  }
};
