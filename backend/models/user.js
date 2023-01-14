import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  profilepic: {
    type: String,
  },
  favouriteProviders: {
    type: [String],
  },
  savedActivities: {
    type: [String],
  },
  savedPackages: {
    type: [String],
  },
  bookedActivities: {
    type: [String],
  },
  bookedPackages: {
    type: [String],
  },
});

export default mongoose.model("User", userSchema);
