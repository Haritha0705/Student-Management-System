const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

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
const studentRouter = require("./routes/students");
app.use("/student", studentRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
