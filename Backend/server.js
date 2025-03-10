import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; // MongoDB Connection
import authRoutes from "./routes/authRoutes.js"; // Authentication routes
import otpRoutes from "./routes/otpRoutes.js"; // OTP routes

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(express.json()); // Parse JSON requests
app.use(cors()); // Enable CORS for frontend communication

// Routes
app.use("/api/auth", authRoutes); // Authentication (Register, Login)
app.use("/api/otp", otpRoutes); // OTP Handling

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the Attendance System....");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
