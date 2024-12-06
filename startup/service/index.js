import express from "express";
import mongoose from "mongoose";

import authRoutes from "./auth.js";

const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1);
  }
};

connectDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
