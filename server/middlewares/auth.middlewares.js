const userModel = require("../Models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const BlackListToken = require("../Models/blackListToken.model.js");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const isBlackListed = await BlackListToken.findOne({ token });
  if (isBlackListed) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
