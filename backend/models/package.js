import mongoose from "mongoose";
import { Schema } from "mongoose";

const packageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  activities: {
    type: [String],
    required: true
  },
  provider: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true
  },
  image: {
    type: String,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  reviews: {
    type: [String],
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Package", packageSchema);
