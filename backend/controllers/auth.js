import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";

export const register = async (req, res, next) => {
  var salt = bcrypt.genSaltSync(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: { $eq: req.body.email } });
    if (!user) next(createError(404, "User Not Found"));
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) next(createError(400, "Incorrect Password"));
    else res.status(200).json("Successfull");
  } catch (err) {
    next(err);
  }
};
