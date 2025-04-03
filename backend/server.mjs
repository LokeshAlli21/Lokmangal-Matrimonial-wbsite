import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

const app = express();
const SECRET_KEY = process.env.JWT_SECRET || "your_super_secret_key"; // ✅ Use env or fallback // key-1234

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN_URL,
    methods: "GET,POST",
    credentials: true,
  })
);

app.use(express.json());

// ✅ Login Route - Generates JWT Token
// app.post("/api/login", (req, res) => {
//   const { username } = req.body;
  
//   if (!username) return res.status(400).json({ message: "Username required" });

//   const user = { id: 1, username }; // Mock user
//   const token = jwt.sign(user, SECRET_KEY, { expiresIn: "10h" });

//   res.json({ message: "Login successful", token });
// });


app.post("/api/login", (req, res) => {
  const { username } = req.body;

  if (!username) return res.status(400).json({ message: "Username required" });

  const user = { id: 1, username }; // Mock user // //////////////////////////////////////////////////
  const token = jwt.sign(user, SECRET_KEY, { expiresIn: "7d" });

  console.log("Generated Token:", token); // Debugging
  res.json({ message: "Login successful", token });
});


// ✅ Protected Route - Requires JWT
app.get("/api/protected", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "Unauthorized" });

  try {
    const user = jwt.verify(token, SECRET_KEY);
    res.json({ message: "Protected data", user });
  } catch (err) {
    res.status(403).json({ message: "Invalid token" });
  }
});

// ✅ Test Route
app.get("/", (req, res) => {
  res.json({ message: "The backend for Lokmangal-Matrimonial-website is working fine!" });
});

// ✅ Sample API Endpoint
app.get("/api/test", (req, res) => {
  console.log("Request Headers:", req.headers);
  res.json({ message: "Backend is working!", icons: ["phone", "email", "facebook"] });
});

// ✅ Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
