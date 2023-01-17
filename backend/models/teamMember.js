import mongoose from "mongoose";
const { Schema } = mongoose;

const memberSchema = new Schema(
  {
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
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    profilepic: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("TeamMember", teamSchema);
