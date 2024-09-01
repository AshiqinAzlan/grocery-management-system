// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
const corsOptions = {
  origin: "http://localhost:3000", // Frontend URL
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Enable Mongoose debug mode
mongoose.set("debug", true); // Enable detailed logging of all Mongoose operations

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/inventory", inventoryRoutes);

// Test Route
app.get("/test", (req, res) => {
  res.status(200).send("Test route working");
});

// MongoDB Connection
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Global error handler (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
