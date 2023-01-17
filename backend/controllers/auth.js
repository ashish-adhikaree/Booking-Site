import User from "../models/user.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  var salt = bcrypt.genSaltSync(10);
  req.body.password = await bcrypt.hash(req.body.password, salt);
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    const { password, email, ...otherDetails } = savedUser._doc;
    res.status(200).json(otherDetails);
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: { $eq: req.body.email } });
    const { email, password, ...otherDetails } = user._doc;
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "600000" }
    );
    if (!user) next(createError(404, "User Not Found"));
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!passwordMatch) next(createError(400, "Incorrect Password"));
    else
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json(otherDetails);
  } catch (err) {
    next(err);
  }
};
