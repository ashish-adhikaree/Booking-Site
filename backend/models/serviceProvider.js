import mongoose from "mongoose";
const { Schema } = mongoose;

const serviceProviderSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  features: {
    type: String,
    required: true,
  },
  images: [String],
  activities: {
    type: [String],
    required: true,
  },
  packages: {
    type: [String],
  },
  advertisements: {
    type: [String],
  },
  promoCodes: {
    type: [String],
  },
  bookings: {
    type: [String]
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  reviews: {
    type: [String],
  },
  closeDays: {
    type: [String],
    default: 0,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("ServiceProvider", serviceProviderSchema);
