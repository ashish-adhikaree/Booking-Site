import mongoose from "mongoose";
import { Schema } from "mongoose";

const packageSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    activities: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discountedPrice: {
      type: Number,
      required: true,
    },
    provider: {
      type: String,
      required: true,
    },
    features: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
    reviews: {
      type: [String],
    },
    unavailableDates: {
      type: [String],
    },
    fullyBookedDates: {
      type: [String],
    },
    isUnserved: {
      type: Boolean,
      required: true,
    },
    promoCodes: {
      type: [String],
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Package", packageSchema);
