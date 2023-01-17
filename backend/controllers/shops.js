import Shop from "../models/shop.js";

// CREATE
export const createShop = async (req, res, next) => {
  const newShop = new Shop(req.body);
  try {
    const savedShop = await newShop.save();
    res.status(200).json(savedShop);
  } catch (err) {
    next(err);
  }
};

// UPDATE
export const updateShop = async (req, res, next) => {
  try {
    const updatedShops = await Shop.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedShops);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deleteShop = async (req, res, next) => {
  try {
    const deletedShops = await Shop.findByIdAndDelete(
      req.params.id
    );
    res.status(200).json(deletedShops);
  } catch (err) {
    next(err);
  }
};

// GET ONE
export const getShop = async (req, res, next) => {
  try {
    const shop = await Shop.findById(req.params.id);
    res.status(200).json(shop);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllShops = async (req, res, next) => {
  try {
    const shops = await Shop.find();
    res.status(200).json(shops);
  } catch (err) {
    next(err);
  }
  
};

