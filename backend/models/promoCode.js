import mongoose from "mongoose";
import { Schema } from "mongoose";

const promoCodeSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  discountType: {
    type: String,
    enum: ["flat", "percent"],
    required: true,
  },
  discountAmount: {
    type: Number,
    required: true,
  },
  expiryDate: {
    type: String,
    required: true,
  },
  activities: {
    type: [String],
  },
  packages: {
    type: [String],
  },
  noOfServices: {
    type: Number,
    required: true,
  },
  provider: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
},{timestamps: true});

export default mongoose.model("PromoCode", promoCodeSchema);
