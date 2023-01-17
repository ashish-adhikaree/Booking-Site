import mongoose from "mongoose";
import { Schema } from "mongoose";

const cartSchema = new Schema(
  {
    activities: {
      type: [String],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
