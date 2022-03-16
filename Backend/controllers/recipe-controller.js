const { Recipe } = require('../models');

const recipeController = {

  // CREATE New Recipe
  createRecipe({body}, res) {
    Recipe.create(body)
    .then(dbUsersData => res.json(dbUsersData))
    .catch(err => res.sendStatus(400).json(err));
  },
  
  // GET all Recipes
  getAllRecipes(req, res) {
    Recipe.find({})
    .then(dbUsersData => res.json(dbUsersData))
    .catch(err => {
        console.log(err);
        res.sendStatus(500).json(err);
    });
  },

  // GET One REcipe by id
  getRecipeById({params}, res) {
    Recipe.findOne({_id: params.id })
    // return if no recipe is found 
    .then(dbUsersData => {
        if(!dbUsersData) {
            res.sendStatus(404).json({message: 'No Recipe Found with this ID!'});
            return; 
        }
        res.json(dbUsersData)
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(400).json(err)
    })
  },


  // UPDATE Recipe by id
  updateRecipe({ params, body }, res) {
    Recipe.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No Recipe Found with this ID!' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => res.json(err));
  },

  // DELETE Recipe
  deleteRecipe({ params }, res) {
    Recipe.findOneAndDelete({_id: params.id})
    .then(dbUsersData => {
        if(!dbUsersData) {
            res.status(404).json({message: 'No Recipe Found with this ID!'});
            return;
        }
        res.json(dbUsersData);
    })
    .catch(err => res.sendStatus(400).json(err));
  },



};

module.exports = recipeController;
