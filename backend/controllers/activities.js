import Activity from "../models/activity.js";

//CREATE
export const createActivity = async (req, res, next) => {
  const newActivity = new Activity(req.body);
  try {
    const savedActivity = await newActivity.save();
    res.status(200).json(savedActivity);
  } catch (err) {
    next(err);
  }
};

//UPDATE
export const updateActivity = async (req, res, next) => {
  try {
    const updatedActivity = await Activity.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedActivity);
  } catch (err) {
    next(err);
  }
};

//DELETE
export const deleteActivity = async (req, res, next) => {
  try {
    const deletedActivity = await Activity.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedActivity);
  } catch (err) {
    next(err);
  }
};

//GET ONE
export const getActivity = async (req, res, next) => {
  try {
    const activity = await Activity.findById(req.params.id);
    res.status(200).json(activity);
  } catch (err) {
    next(err);
  }
};

//GET ALL
export const getAllActivities = async (req, res, next) => {
  try {
    const activities = await Activity.find();
    res.status(200).json(activities);
  } catch (err) {
    next(err);
  }
};
