import User from "../models/user.js";

//UPDATE
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    const { password, email, ...otherDetails } = updatedUser;
    res.status(200).json(otherDetails);
  } catch (err) {
    next(err);
  }
};

//DELETE
export const deleteUser = async (req, res, next) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    const { password, email, ...otherDetails } = updatedUser;
    res.status(200).json(otherDetails);
  } catch (err) {
    next(err);
  }
};

//GET ONE
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, email, ...otherDetails } = user;
    res.status(200).json(otherDetails);
  } catch (err) {
    next(err);
  }
};

//GET ALL
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    const { password, email, ...otherDetails } = users;
    console.log(otherDetails)
    res.status(200).json({...otherDetails});
  } catch (err) {
    next(err);
  }
};
