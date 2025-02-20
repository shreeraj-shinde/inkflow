const userModel = require("../Models/user.model.js");
const userService = require("../services/user.service.js");
const { validationResult } = require("express-validator");
const BlackListToken = require("../Models/blackListToken.model.js");
module.exports.register = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { fullname, email, password } = req.body;

  const hashedPassword = await userModel.hashPassword(password);
  const user = await userService.createUser({
    firstname: fullname.firstname,
    lastname: fullname.lastname,
    email,
    password: hashedPassword,
  });
  const token = user.generateToken();
  return res.status(201).json({ user, token });
};

module.exports.loginUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await userModel.findOne({ email }).select("+password");
  if (!user) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }
  const isValid = await user.comparePassword(password);
  if (!isValid) {
    return res.status(401).json({ message: "Invalid Email or Password" });
  }
  const token = user.generateToken();
  res.cookie("token", token);
  return res.status(200).json({ user, token });
};

module.exports.profile = async (req, res, next) => {
  return res.status(200).json(req.user);
};

module.exports.logout = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  const blackListToken = await BlackListToken.create({ token });
  return res.status(200).json({ message: "Logged out" });
};
