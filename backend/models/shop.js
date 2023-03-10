import mongoose from "mongoose";
const { Schema } = mongoose;

const shopSchema = new Schema(
  {
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
    owner: {
      type: String,
      required: true,
    },
    activities: {
      type: [String],
      required: true,
    },
    packages: {
      type: [String],
    },
    teamMembers: {
      type: [String],
    },
    advertisements: {
      type: [String],
    },
    promoCodes: {
      type: [String],
    },
    bookings: {
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
    closeDays: {
      type: [String],
      default: 0,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Shop", shopSchema);
