const mongoose = require("mongoose");
require("dotenv").config();

// FIXME: if using mac keep 127.0.0.1:27017, if using windows change to localhost. Or we create a dotenv file and set our preference
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.set("debug", true);

module.exports = mongoose.connection;
