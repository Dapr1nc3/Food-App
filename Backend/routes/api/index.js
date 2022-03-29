const router = require("express").Router();
const recipeRoutes = require("./recipe-routes");
const userRoutes = require("./user-routes");

router.use("/recipes", recipeRoutes);
router.use("/user", userRoutes);

module.exports = router;
