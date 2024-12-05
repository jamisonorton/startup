import express from "express";
import jwt from "jsonwebtoken";

import User from "../models/user.js"; // Ensure correct import path

const router = express.Router();

// Register route
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check for existing user with the same email or username
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email or username already in use" });
    }

    // Create and save the new user
    const user = new User({ username, email, password });

    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email, including the password field
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({ error: "Invalid email or password" });
    }

    // Compare passwords using the model's method
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ message: "Login successful", token });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
