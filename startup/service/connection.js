import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectToDatabase = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      tls: true, // Enables TLS
      serverSelectionTimeoutMS: 3000, // Timeout for server selection
      autoSelectFamily: false, // Optional, based on your use case
    });
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
};
