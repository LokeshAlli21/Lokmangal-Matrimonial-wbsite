import express from "express";
import { register, login, getUser, logout, protectedRoute } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", verifyToken, getUser);
router.post("/logout", logout);
router.get("/protected", verifyToken, protectedRoute);

export default router;
