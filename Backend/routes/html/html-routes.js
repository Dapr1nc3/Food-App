const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

// TODO: might need to change path to connect the pages to frontend
// route for landing page
router.get("/", (req, res) => {
  res.render("landingPage");
});

// route for page 2
router.get("/profile", authMiddleware, (req, res) => {
  res.render("profile");
});

// route for signup page 
router.get("/signup", (req, res) => {
  res.render("signup");
});

// route for login page
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;