import ServiceProvider from "../models/serviceProvider.js";

// CREATE
export const createServiceProvider = async (req, res, next) => {
  const newServiceProvider = new ServiceProvider(req.body);
  try {
    const savedServiceProvider = await newServiceProvider.save();
    res.status(200).json(savedServiceProvider);
  } catch (err) {
    next(err);
  }
};

// UPDATE
export const updateServiceProvider = async (req, res, next) => {
  try {
    const updatedServiceProviders = await ServiceProvider.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedServiceProviders);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteServiceProvider = async (req, res, next) => {
  try {
    const deletedServiceProviders = await ServiceProvider.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedServiceProviders);
  } catch (err) {
    next(err);
  }
};

// GET ONE
export const getServiceProvider = async (req, res, next) => {
  try {
    const serviceProviders = await ServiceProvider.findById(req.params.id);
    res.status(200).json(serviceProviders);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllServiceProviders = async (req, res, next) => {
  try {
    const serviceProviders = await ServiceProvider.find();
    res.status(200).json(serviceProviders);
  } catch (err) {
    next(err);
  }
  
};

