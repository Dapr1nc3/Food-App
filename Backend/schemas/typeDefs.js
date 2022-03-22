// import the gql tagged template function
const { gql } = require('apollo-server-express');

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
}`;

// export the typeDefs
module.exports = typeDefs;