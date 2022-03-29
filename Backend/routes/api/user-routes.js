const router = require("express").Router();
const {
  createUser,
  getSingleUser,
  getAllUsers,
  updateUser,
  deleteUser,
  login,
  addRecipe,
  removeRecipe,
  // saveRecipe,
  // deleteRecipe
} = require("../../controllers/user-controller");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
router.route("/").get(getAllUsers).post(createUser);

router.route("/login").post(login);

// TODO: when the user clicks the login it redirects to /loggedIn/:id????
router.route("/loggedIn/:id").post(addRecipe);
// .post(saveRecipe);

router.route("/loggedIn/:id/:recipeId").delete(removeRecipe);
// .delete(deleteRecipe);

router
  .route("/:id")
  .get(authMiddleware, getSingleUser)
  .put(authMiddleware, updateUser)
  .delete(authMiddleware, deleteUser);

module.exports = router;
