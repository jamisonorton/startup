const express = require("express");
const mongoose = require("mongoose");

// Initialize the app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// MongoDB connection URI
const dbURI =
  "mongodb+srv://jamisonorton:wzDGXeaHBlFdZXxD@cluster0.bi8fh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas
mongoose
  .connect(dbURI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB Atlas:", error));

// Sample route
app.get("/", (req, res) => {
  res.send("Hello, MongoDB and Express!");
});

// Set the port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
