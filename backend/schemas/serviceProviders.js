import mongoose from "mongoose";
const { Schema } = mongoose;

const serviceProvidersSchema = new Schema({
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
  images: [String],
  activities: {
    type: [String],
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  openDays: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("ServiceProviders", serviceProvidersSchema);
