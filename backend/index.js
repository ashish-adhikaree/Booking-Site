import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";
import serviceProvidersRouter from "./routes/serviceProviders";

const app = express();
dotenv.config();

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to Database");
  } catch (err) {
    throw err;
  }
};

//Middleware//

app.use("/users", userRouter)
app.use("/providers", serviceProvidersRouter)

app.listen(8080, () => {
  connectDB();
  console.log("server started...");
});
