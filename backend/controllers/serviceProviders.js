import ServiceProviders from "../schemas/serviceProviders.js";

// CREATE
export const createServiceProvider = async (req, res, next) => {
  const newServiceProvider = new ServiceProviders(req.body);
  try {
    const savedServiceProvider = await newServiceProvider.save();
    res.status(200).json(savedServiceProvider);
  } catch (err) {
    next(err);
  }
};

// GET ONE
export const getServiceProvider = async (req, res, next) => {
  try {
    const serviceProviders = await ServiceProviders.findById(req.params.id);
    res.status(200).json(serviceProviders);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllServiceProviders = async (req, res, next) => {
  try {
    const serviceProviders = await ServiceProviders.find();
    res.status(200).json(serviceProviders);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteServiceProviders = async (req, res, next) => {
  try {
    const serviceProviders = await ServiceProviders.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(serviceProviders);
  } catch (err) {
    next(err);
  }
};

// UPDATE
export const updateServiceProvider = async (req, res, next) => {
  try {
    const serviceProviders = await ServiceProviders.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(serviceProviders);
  } catch (err) {
    next(err);
  }
};
