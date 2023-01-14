import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";
import serviceProvidersRouter from "./routes/serviceProviders.js";

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
app.use(express.json());

//Routes
app.use("/users", userRouter);
app.use("/providers", serviceProvidersRouter);

// Error Handling
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something Went Wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
  });
});

app.listen(8080, () => {
  connectDB();
  console.log("server started...");
});
