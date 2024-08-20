require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// const authRoutes = require("./routes/auth");
const inventoryRoutes = require("./routes/inventoryRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Login and Register Routes
// app.use("/api/auth", authRoutes);

// Connect inventory routes to Express server
app.use("/api/inventory", inventoryRoutes);

app.get("/test", (req, res) => {
  res.status(200).send("Test route working");
});

// Connect to MongoDB
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
