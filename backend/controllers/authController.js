import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../config/db.js";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.JWT_SECRET || "your_super_secret_key";

export const register = async (req, res) => {
  console.log("➡️ Register Request Received");
  const { email, password, name } = req.body;

  if (!email || !password || !name) return res.status(400).json({ message: "All fields are required" });

  try {
    const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (existingUser.rows.length) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, email",
      [name, email, hashedPassword]
    );

    const token = jwt.sign({ id: newUser.rows[0].id, email }, SECRET_KEY, { expiresIn: "7d" });
    res.json({ message: "Registration successful", token });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (req, res) => {
  console.log("➡️ Login Request Received");
  const { email, password } = req.body;

  if (!email || !password) return res.status(400).json({ message: "Email and password required" });

  try {
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (user.rows.length === 0) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.rows[0].password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.rows[0].id, email }, SECRET_KEY, { expiresIn: "7d" });
    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error("❌ Login Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUser = async (req, res) => {
  console.log("➡️ Fetch User Request Received");

  try {
    const user = await pool.query("SELECT id, email, name FROM users WHERE id = $1", [req.user.id]);
    if (user.rows.length === 0) return res.status(404).json({ message: "User not found" });

    res.json(user.rows[0]);
  } catch (error) {
    console.error("❌ Fetch User Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logout = (req, res) => {
  console.log("➡️ Logout Request Received");
  res.json({ message: "Logged out successfully" });
};

export const protectedRoute = (req, res) => {
  console.log("➡️ Protected Route Accessed");
  res.json({ message: "Protected data accessed", user: req.user });
};
