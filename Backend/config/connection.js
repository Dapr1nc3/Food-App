const mongoose = require("mongoose");

// FIXME: if using mac keep 127.0.0.1:27017, if using windows change to localhost. Or we create a dotenv file and set our preference
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/recipe-api",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;
