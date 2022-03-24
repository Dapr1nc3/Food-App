const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const cors = require('cors');

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async () => {
  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // context: authMiddleware
  });

  // Start the Apollo server
  await server.start();

  // integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  // log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// Initialize the Apollo server
startServer();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// FIXME: might need this to change if the public file cant be in the Frontend folder for the app to open
app.use(express.static(".././Frontend/public"));
app.use(require("./routes"));
app.use(cors());


db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Server Successfully listening on localhost:${PORT}`)
  );
});
