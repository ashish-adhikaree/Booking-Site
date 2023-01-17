import PromoCode from "../models/promoCode.js";
import Package from "../models/package.js"
import Activity from "../models/activity.js"


// CREATE
export const createPromoCode = async (req, res, next) => {
  const newPromoCode = new PromoCode(req.body);
  try {
    const savedPromoCode = await newPromoCode.save();
    res.status(200).json(savedPromoCode);
  } catch (err) {
    next(err);
  }
};

// UPDATE
export const updatePromoCode = async (req, res, next) => {
  try {
    const updatedPromoCodes = await PromoCode.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPromoCodes);
  } catch (err) {
    next(err);
  }
};

// DELETE
export const deletePromoCode = async (req, res, next) => {
  try {
    const deletedPromoCodes = await PromoCode.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPromoCodes);
  } catch (err) {
    next(err);
  }
};

// GET ONE
export const getPromoCode = async (req, res, next) => {
  try {
    const promoCode = await PromoCode.findById(req.params.id);
    res.status(200).json(promoCode);
  } catch (err) {
    next(err);
  }
};

// GET ALL
export const getAllPromoCodes = async (req, res, next) => {
  try {
    const promoCodes = await PromoCode.find();
    res.status(200).json(promoCodes);
  } catch (err) {
    next(err);
  }
};
