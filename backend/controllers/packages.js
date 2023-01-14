import Package from "../models/package.js";

//CREATE
export const createPackage = async (req, res, next) => {
  const newPackage = new Package(req.body);
  try {
    const savedPackage = await newPackage.save();
    res.status(200).json(savedPackage);
  } catch (err) {
    next(err);
  }
};

//UPDATE
export const updatePackage = async (req, res, next) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatePackage);
  } catch (err) {
    next(err);
  }
};

//DELETE
export const deletePackage = async (req, res, next) => {
  try {
    const deletedPackage = await Package.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPackage);
  } catch (err) {
    next(err);
  }
};

//GET ONE
export const getPackage = async (req, res, next) => {
  try {
    const Package = await Package.findById(req.params.id);
    res.status(200).json(Package);
  } catch (err) {
    next(err);
  }
};

//GET ALL
export const getAllPackages = async (req, res, next) => {
  try {
    const activities = await Package.find();
    res.status(200).json(activities);
  } catch (err) {
    next(err);
  }
};
