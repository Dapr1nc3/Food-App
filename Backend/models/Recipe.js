const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

// TODO: go over recipeSchema (might need to adjust the model to have an id, etc.)
const RecipeSchema = new Schema(
  {
    // Brian:
    // type: {
    //   type: String,
    //   unique: true,
    //   required: true,
    //   trim: true
    // },
    username: {
      type: String,
      required: true,
    },
    recipeText: {
      type: String,
      required: "Please input your recipe",
      minlength: [1, "Character length must be between 1-280"],
      maxlength: [1000, "Can not exceed 1000 characters"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false,
  }
);

const Recipe = model("Recipe", RecipeSchema);

module.exports = Recipe;
