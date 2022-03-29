// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    recipeCount: Int
    savedRecipe: [Recipe]
  }
  type Recipe {
    _id: ID
    recipeText: String
    createdAt: String
    username: String
  }
  type Query {
    users: [User]
    user(username: String!): User
    recipes(username: String): [Recipe]
    recipe(_id: ID!): Recipe
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
  }
  type Auth {
    token: ID!
    user: User
  }
`;

// export the typeDefs
module.exports = typeDefs;
