import express from "express";
import { connectToDatabase } from "./db/connection.js";
import authRoutes from "./routes/auth-route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const app = express();
// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
