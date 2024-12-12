import express from "express";
import { login, logout, signup, checkAuth } from "./auth-controller.js";
import { verifyToken } from "./verifyToken.js";

const router = express.Router();

router.post("/auth/signup", signup);

router.post("/auth/login", login);

router.post("/auth/logout", logout);

router.get("/auth/check-auth", verifyToken, checkAuth);

export default router;
