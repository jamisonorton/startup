import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // Load environment variables

//authRoutes
import authRoutes from "./routes/auth.js"; // Notice the .js extension

const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.env.PORT;

// JSON body parsing using built-in middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Serve up the front-end static content hosting
app.use(express.static("public"));

// Router for service endpoints
var apiRouter = express.Router();

app.use(`/api`, apiRouter);

apiRouter.use("/auth", authRoutes);

//Test route for API backend... Works great. Now I need to make something call the backend from frontend
var testData = { test: "testData" };

apiRouter.get("/test", (_req, res) => {
  console.log("In Test");
  res.send(testData);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
