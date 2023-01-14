import mongoose from "mongoose";
const { Schema } = mongoose;

const serviceProvidersSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  images:[string],
  activities: {
    type: [String],
    required: true,
  },
  rating : Number,

});

mongoose.model("Service Providers", serviceProvidersSchema)

