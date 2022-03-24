const router = require('express').Router();
const spoonacularRoutes = require('./spoonacular-routes');
const recipeRoutes = require('./recipe-routes');
const userRoutes = require('./user-routes');

router.use('/recipes', recipeRoutes);
router.use('/user', userRoutes);
router.use('/spoonacular', spoonacularRoutes);

module.exports = router;
