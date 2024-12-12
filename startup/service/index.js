import express from "express";
import cors from "cors";
import { connectToDatabase } from "./connection.js";
import authRoutes from "./auth-route.js";
import cookieParser from "cookie-parser";
import peerProxy from "./peerProxy.js";
import dotenv from "dotenv";
import http from "http"; // Import the http module

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;

const app = express();

app.use(
  cors({ origin: "http://startup.janesmusicstudio.com", credentials: true })
);

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// Serve up the application's static content
app.use(express.static("public"));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set("trust proxy", true);

app.use("/api/auth", authRoutes);

connectToDatabase();

// Default error handler
app.use(function (err, req, res) {
  res.status(500).send({ type: err.name, message: err.message });
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile("index.html", { root: "public" });
});

// Create the HTTP server
const httpServer = http.createServer(app);

// Pass the HTTP server to peerProxy
peerProxy(httpServer);

// Start the server
httpServer.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
