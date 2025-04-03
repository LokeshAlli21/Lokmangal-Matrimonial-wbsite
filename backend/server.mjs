import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({message: "working fine!"})
})

// Sample API Endpoint
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working!", icons: ["phone", "email", "facebook"] });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
