import mongoose from "mongoose";
import { Schema } from "mongoose";

const promoCodeSchema = new Schema({
  code: {
    type: String,
    required: true,
  },
  discountType: {
    type: "flat" | "percent",
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
  validServices: {
    type: [String],
    required: true,
  },
  author: {
    type: String,
    required: true
  }
});

export default mongoose.Model("PromoCode", promoCodeSchema)
