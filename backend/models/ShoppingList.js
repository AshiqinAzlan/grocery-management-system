const mongoose = require('mongoose');

// Define a schema for the ShoppingList
const ShoppingListSchema = new mongoose.Schema({
  listName: { type: String, required: true },  // Name of the shopping list
  createdAt: { type: Date, default: Date.now }, // Creation date of the shopping list
});

// Compile model from schema
module.exports = mongoose.model('ShoppingList', ShoppingListSchema, 'shoppinglists');
