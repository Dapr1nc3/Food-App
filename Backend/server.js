const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
<<<<<<< HEAD
const cors = require('cors');
=======
const { authMiddleware } = require('./utils/auth');
const cors = require("cors");
>>>>>>> workspace-BrianD

const PORT = process.env.PORT || 3001;
const app = express();

<<<<<<< HEAD
=======
// const corsOptions = {
//   origin: "http://localhost:3001",
//   credentials: true
// };

>>>>>>> workspace-BrianD
const startServer = async () => {
  // create a new Apollo server and pass in our schema data
  const server = new ApolloServer({
    typeDefs,
    resolvers,
<<<<<<< HEAD
    // context: authMiddleware
=======
    // cors: corsOptions,
    context: authMiddleware
>>>>>>> workspace-BrianD
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
<<<<<<< HEAD
app.use(cors());
=======
// app.use(cors(corsOptions));
>>>>>>> workspace-BrianD


db.once("open", () => {
  app.listen(PORT, () =>
    console.log(`Server Successfully listening on localhost:${PORT}`)
  );
<<<<<<< HEAD
});
=======
});
>>>>>>> workspace-BrianD
