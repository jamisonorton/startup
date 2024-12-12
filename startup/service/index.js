import express from "express";
import cors from "cors";
import { connectToDatabase } from "./connection.js";
import authRoutes from "./auth-route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;

const app = express();
app.use(
  cors({ origin: "http://startup.janesmusicstudio.com", credentials: true })
);
// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
