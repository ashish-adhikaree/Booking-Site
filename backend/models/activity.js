import mongoose from "mongoose";
import { Schema } from "mongoose";

const activitySchema = new Schema({
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
  provider: {
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
  isAvailable: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Activity", activitySchema);
