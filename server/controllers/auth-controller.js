import { User } from "../model/user.js";
import bcrypt from "bcryptjs";
import { generateJWTToken } from "../utils/generateJWTToken.js";

export const signup = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const userAlreadyExists = await User.findOne({ email });
    if (userAlreadyExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();

    generateJWTToken(res, user._id);

    res.status(201).json({ message: "User was created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "No User associated with that email" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateJWTToken(res, user._id);

    res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    console.log("error logging in", error);
    res.status(400), json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "Logout Successful" });
};

export const checkAuth = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
    res.status(200).json({ user: { ...user._doc, password: undefined } });
  } catch (error) {
    console.log("error checking auth", error);
    res.status(400).json({ message: error.message });
  }
};
