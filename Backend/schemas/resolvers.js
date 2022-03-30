const { User, Recipe } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    recipes: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Recipe.find(params).sort({ createdAt: -1 });
    },
    recipe: async (parent, { _id }) => {
      return Recipe.findOne({ _id });
    },
    // get all users
    users: async () => {
      return User.find().select("-__v -password").populate("savedRecipes");
    },
    // get a user by username
    user: async (parent, { username }) => {
      return User.findOne({ username })
        .select("-__v -password")
        .populate("savedRecipes");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    // addSaveRecipe: async (parent, args, context) => {
    //   await User.findByIdAndUpdate(
    //     { _id: args._id },
    //     { $push: { savedRecipes: args.recipe } }
    //   );
    // },
  },
};

module.exports = resolvers;
