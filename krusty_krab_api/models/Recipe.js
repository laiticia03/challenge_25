const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  ingredients: [String]
});

module.exports = mongoose.model('Recipe', recipeSchema);