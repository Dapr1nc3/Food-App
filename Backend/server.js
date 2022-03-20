const express = require("express");
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");

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

// Make sure MongoDB running by opening Gitbash and running 'mongod'
// FIXME: if using mac keep 127.0.0.1:27017, if using windows change to localhost. Or we create a dotenv file and set our preference
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/recipe-api",
  {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Use this to log mongo queries being executed!
mongoose.set("debug", true);

// create an Express GET route to connect Backend to Frontend
app.get("/express_backend", (req, res) => {
  console.log("YOUR EXPRESS BACKEND IS CONNECTED TO REACT");
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Server Successfully listening on localhost:${PORT}`)
  );
});
