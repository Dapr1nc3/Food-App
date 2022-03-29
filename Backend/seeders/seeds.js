const faker = require('faker');

const db = require('../config/connection');
const { Recipe , User } = require('../models');

db.once('open', async () => {
  await Recipe.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create recipes
  let createdRecipes = [];
  for (let i = 0; i < 100; i += 1) {
    const recipeText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: id } = createdUsers.ops[randomUserIndex];

    const createdRecipe = await Recipe.create({ recipeText, username });

    const updatedUser = await User.updateOne(
      { _id: id },
      { $push: { savedRecipes: createdRecipe } }
    );
    // console.log(updatedUser);
    createdRecipes.push(createdRecipe);
  }

  console.log('all done!');
  process.exit(0);
<<<<<<< HEAD
});
=======
});
>>>>>>> workspace-BrianD
