import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load environment variables from .env

const app = express();
const SECRET_KEY = process.env.JWT_SECRET || "your_super_secret_key"; // ✅ Secure JWT Key

// ✅ Middleware - Enables CORS for frontend communication
app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN_URL || "http://localhost:5173",
    methods: "GET,POST",
    credentials: true,
  })
);

app.use(express.json()); // ✅ Middleware - Parse JSON request body

const users = []; // ✅ Temporary user storage (Replace with database in production)

// ✅ Register Route - Creates a new user and returns a JWT token
app.post("/api/register", (req, res) => {
  console.log("➡️  Register Request Received"); // Log request
  const { email, password, name } = req.body;

  // ✅ Check if all required fields are provided
  if (!email || !password || !name) {
    console.log("❌ Registration Failed: Missing fields");
    return res.status(400).json({ message: "All fields are required" });
  }

  // ✅ Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    console.log(`❌ Registration Failed: User with email ${email} already exists`);
    return res.status(400).json({ message: "User already exists" });
  }

  // ✅ Create a new user
  const newUser = { id: users.length + 1, email, password, name };
  users.push(newUser);
  console.log(`✅ User Registered: ${email}`);

  // ✅ Generate JWT Token
  const token = jwt.sign({ id: newUser.id, email }, SECRET_KEY, { expiresIn: "7d" });
  console.log(`🔑 JWT Token Generated for ${email}`);

  res.json({ message: "Registration successful", token });
});

// ✅ Login Route - Authenticates user and returns JWT Token
app.post("/api/login", (req, res) => {
  console.log("➡️  Login Request Received"); // Log request
  const { email, password } = req.body;

  // ✅ Check if all required fields are provided
  if (!email || !password) {
    console.log("❌ Login Failed: Missing email or password");
    return res.status(400).json({ message: "Email and password required" });
  }

  // ✅ Find user in database
  const user = users.find((user) => user.email === email && user.password === password);
  if (!user) {
    console.log(`❌ Login Failed: Invalid credentials for ${email}`);
    return res.status(401).json({ message: "Invalid credentials" });
  }

  // ✅ Generate JWT Token
  const token = jwt.sign({ id: user.id, email }, SECRET_KEY, { expiresIn: "7d" });
  console.log(`✅ Login Successful: JWT Token Issued for ${email}`);

  res.json({ message: "Login successful", token });
});

// ✅ Get Current User - Requires JWT Authentication
app.get("/api/user", (req, res) => {
  console.log("➡️  Fetch User Request Received"); // Log request
  const token = req.headers.authorization?.split(" ")[1];

  // ✅ Check if token is provided
  if (!token) {
    console.log("❌ Unauthorized: No token provided");
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // ✅ Verify JWT Token
    const user = jwt.verify(token, SECRET_KEY);
    console.log(`✅ User Data Retrieved: ${user.email}`);
    res.json({ id: user.id, email: user.email });
  } catch (err) {
    console.log("❌ Invalid Token Attempt");
    res.status(403).json({ message: "Invalid token" });
  }
});

// ✅ Logout Route (Handled by frontend clearing the token)
app.post("/api/logout", (req, res) => {
  console.log("➡️  Logout Request Received");
  res.json({ message: "Logged out successfully" });
});

// ✅ Protected Route - Requires JWT Authentication
app.get("/api/protected", (req, res) => {
  console.log("➡️  Protected Route Accessed"); // Log request
  const token = req.headers.authorization?.split(" ")[1];

  // ✅ Check if token is provided
  if (!token) {
    console.log("❌ Unauthorized: No token provided");
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // ✅ Verify JWT Token
    const user = jwt.verify(token, SECRET_KEY);
    console.log(`✅ Access Granted for: ${user.email}`);
    res.json({ message: "Protected data accessed", user });
  } catch (err) {
    console.log("❌ Invalid Token Attempt");
    res.status(403).json({ message: "Invalid token" });
  }
});


// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
