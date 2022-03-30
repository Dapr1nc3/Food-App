const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { authMiddleware } = require("./utils/auth");
const cors = require("cors");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();

// const corsOptions = {
//   origin: "http://localhost:3001",
//   credentials: true
// };

const startServer = async () => {
  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // cors: corsOptions,
    context: authMiddleware,
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
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../Frontend/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/build/index.html"));
});
app.use(require("./routes"));
// app.use(cors(corsOptions));

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Server Successfully listening on localhost:${PORT}`)
  );
});
