import express from "express";
import ViteExpress from "vite-express";
// import mongoose from "mongoose";
// import cors from "cors";

const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

//Middleware
app.use("/", require("./routes/authRoute"));

// mongo connection
// mongoose.Promise = global.Promise;
// mongoose.connect(
//   "mongodb+srv://cs260:cs260@janesmusicstudio.n8cqt.mongodb.net/?retryWrites=true&w=majority&appName=janesmusicstudio"
// );

// Define your API routes here
app.get("/api/message", (_, res) => {
  res.send("Hello from Express!");
});

// Serve Vite in middleware mode
ViteExpress.listen(app, port, () => {
  console.log("Server listening on port 4000");
});
