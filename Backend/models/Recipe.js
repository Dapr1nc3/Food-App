const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const RecipeSchema = new Schema(
  {
    type: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    // prevents virtuals from creating duplicate of _id as `id`
    id: false
  }
);

const Recipe = model('Recipe', RecipeSchema);

module.exports = Recipe;
