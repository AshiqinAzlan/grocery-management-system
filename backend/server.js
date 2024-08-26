const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to Database
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost/dapurmate')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Could not connect to MongoDB...', err));

// Define routes
app.use('/shoppinglist', require('./routes/shoppingList')); // Ensure this matches your directory structure

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

