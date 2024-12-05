import express from "express";
import dotenv from "dotenv";
import { connectToDatabase } from "./database.js";
import authRouter from "./routes/auth.js"; // Import the auth router

// Load environment variables
dotenv.config();

// Validate environment variables
if (!process.env.PORT) {
  console.error("Error: PORT environment variable is not set.");
  process.exit(1);
}

if (!process.env.JWT_SECRET) {
  console.error("Error: JWT_SECRET environment variable is not set.");
  process.exit(1);
}

const app = express();
const port = process.env.PORT;

// Connect to MongoDB
(async () => {
  try {
    await connectToDatabase();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
})();

process.on("SIGINT", async () => {
  console.log("Shutting down...");
  process.exit(0);
});

// Middleware
app.use(express.json());
app.use(express.static("public"));
app.set("trust proxy", true);

// API Routes
app.use(`/api/auth`, authRouter); // Use the auth router

// Test route
app.get("/api/test", (_req, res) => {
  res.json({ test: "testData" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
