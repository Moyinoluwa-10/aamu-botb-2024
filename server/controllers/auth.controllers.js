const { StatusCodes } = require("http-status-codes");
const User = require("../models/user.models");
const { BadRequestError } = require("../errors");
const { JWT_SECRET, JWT_LIFETIME } = require("../config/config");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { email } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    throw new BadRequestError("Email already exists");
  }

  const user = await User.create(req.body);

  return res.status(StatusCodes.CREATED).json({
    msg: "user created successfully",
  });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new BadRequestError("Incorrect email or password");
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new BadRequestError("Incorrect email or password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, email }, JWT_SECRET, {
    expiresIn: JWT_LIFETIME,
  });

  return res.status(200).json({ msg: "user logged in successfully", token });
};

module.exports = {
  signup,
  signin,
};

