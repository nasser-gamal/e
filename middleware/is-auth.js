const jwt = require("jsonwebtoken");

const isAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "SECRETTOKEN");
    const userId = decodedToken.id;
    req.userId = userId;
    next();
  } catch (err) {
    console.log(err)
    return res.status(500).json(err);
  }
};

module.exports = isAuth;
