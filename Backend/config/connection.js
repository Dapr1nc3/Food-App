const mongoose = require('mongoose');
<<<<<<< HEAD
require('dotenv').config();
// once deployed change the above to include "if (process.env.NODE_ENV === 'development')
// {require('dotenv').config()}


// FIXME: if using mac keep 127.0.0.1:27017, if using windows change to localhost. Or we create a dotenv file and set our preference
mongoose.connect(process.env.MONGODB_URI, {
=======

// FIXME: if using mac keep 127.0.0.1:27017, if using windows change to localhost. Or we create a dotenv file and set our preference
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/recipe-api', {
>>>>>>> workspace-BrianD
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

<<<<<<< HEAD
// Use this to log mongo queries being executed!
mongoose.set("debug", true);

module.exports = mongoose.connection;
=======
module.exports = mongoose.connection;
>>>>>>> workspace-BrianD
