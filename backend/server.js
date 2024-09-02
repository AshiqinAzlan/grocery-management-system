require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoutes = require("./routes/auth");
const inventoryRoutes = require("./routes/inventoryRoutes");
const shoppingListRoutes = require("./routes/shoppingList");
const recipeRoutes = require("./routes/recipeRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/inventory", inventoryRoutes);
app.use("/shoppinglist", shoppingListRoutes);
app.use("/api/recipe", recipeRoutes);


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
