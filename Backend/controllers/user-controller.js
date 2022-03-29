// import user model
const { User, Recipe } = require("../models");
// import sign token function from auth
const { signToken } = require("../utils/auth");

module.exports = {
  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [
        { _id: user ? user._id : params.id },
        { username: params.username },
      ],
    });

    if (!foundUser) {
      return res
        .status(400)
        .json({ message: "Cannot find a user with this id!" });
    }

    res.json(foundUser);
  },

  // create a user, sign a token, and send it back (to client/src/components/SignUp.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  // get all users
  getAllUsers(req, res) {
    User.find({})
      .populate({
        path: "savedRecipes",
        select: "-__v",
      })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  // update user by id
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // delete user: FIXME: deleting user does not delete recipe's created by user from database.
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong password!" });
    }
    const token = signToken(user);
    res.json({ token, user });
  },

  // add thought to a user
  addRecipe({ params, body }, res) {
    console.log(body);
    Recipe.create(body)
      .then(({ _id }) => {
        console.log(_id);
        return User.findOneAndUpdate(
          { _id: params.id },
          { $push: { savedRecipes: _id } },
          { new: true }
        )
          .populate({
            path: "recipes",
            select: "-__v",
          })
          .select("-__v");
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  // remove thought
  removeRecipe({ params }, res) {
    Recipe.findOneAndDelete({ _id: params.recipeId })
      .then((deletedRecipe) => {
        if (!deletedRecipe) {
          return res.status(404).json({ message: "No thought with this id!" });
        }
        return User.findOneAndUpdate(
          { _id: params.id },
          { $pull: { savedRecipes: params.recipeId } },
          { new: true }
        );
      })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },
  // save a recipe to a user's `savedRecipes` field by adding it to the set (to prevent duplicates)
  // user comes from `req.user` created in the auth middleware function
  //   async saveRecipe({ params, body }, res) {
  //     console.log(params);
  //     try {
  //       const updatedUser = await User.findOneAndUpdate(
  //         { _id: params.id },
  //         { $addToSet: { savedRecipes: body } },
  //         { new: true, runValidators: true }
  //       );
  //       return res.json(updatedUser);
  //     } catch (err) {
  //       console.log(err);
  //       return res.status(400).json(err);
  //     }
  //   },
  //   // remove a recipe from `savedRecipes`
  //   async deleteRecipe({ user, params }, res) {
  //     const updatedUser = await User.findOneAndUpdate(
  //       { _id: user.id },
  //       { $pull: { savedRecipes: { recipeId: params.recipeId } } },
  //       { new: true }
  //     );
  //     if (!updatedUser) {
  //       return res.status(404).json({ message: "Couldn't find user with this id!" });
  //     }
  //     return res.json(updatedUser);
  //   },
};
