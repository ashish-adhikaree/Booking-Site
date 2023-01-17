import mongoose from "mongoose";
import { Schema } from "mongoose";

const bookingSchema = new Schema(
  {
    user: {
      type: String,
      required: true,
    },
    service: {
      type: [String],
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    discountAmount: {
      type: Number,
    },
    status: {
      type: String,
      enum: ["pending", "cancelled", "booked", "served"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
