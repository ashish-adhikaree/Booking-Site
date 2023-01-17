import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

// Routes 
import userRouter from "./routes/users.js";
import shopsRouter from "./routes/shops.js";
import authRouter from "./routes/auth.js";
import activitiesRouter from "./routes/activities.js";
import packagesRouter from "./routes/packages.js";
import promoCodesRouter from "./routes/promoCodes.js";

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
app.use(cookieParser())
app.use(express.json());

//Routes
app.use("/users", userRouter);
app.use("/shops", shopsRouter);
app.use("/auth", authRouter);
app.use("/activities", activitiesRouter);
app.use("/packages", packagesRouter);
app.use("/promocodes", promoCodesRouter);

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
