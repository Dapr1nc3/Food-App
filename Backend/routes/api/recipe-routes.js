const router = require("express").Router();

// Variables
const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../../controllers/recipe-controller");

// GET and POST All Recipes
router.route("/").get(getAllRecipes).post(createRecipe);

// GET, PUT, and DELETE Recipes
router
  .route("/:recipeId")
  .get(getRecipeById)
  .put(updateRecipe)
  .delete(deleteRecipe);

module.exports = router;
