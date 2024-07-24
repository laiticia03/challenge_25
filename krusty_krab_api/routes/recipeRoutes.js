const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');
const authenticateJWT = require('../middleware/authenticateJWT');

router.get('/', authenticateJWT, recipeController.getAllRecipes);
router.get('/:id', authenticateJWT, recipeController.getRecipeById);
router.post('/', authenticateJWT, recipeController.createRecipe);
router.patch('/:id', authenticateJWT, recipeController.updateRecipe);
router.delete('/:id', authenticateJWT, recipeController.deleteRecipe);

module.exports = router;