// server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const studentRouter = require("./routes/students");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8070;
const MONGODB_URL = process.env.MONGODB_URL;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose.connect(MONGODB_URL)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err) => console.error("MongoDB Connection Failed:", err));

// Routes
// All student routes will be under /api/student
app.use("/api/student", studentRouter);

// Add a new test route
app.get("/api/new", (req, res) => {
    return res.status(200).json({ message: "New Route works!" });
});

// Root route (optional)
app.get("/", (req, res) => {
    res.send("API is running");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
