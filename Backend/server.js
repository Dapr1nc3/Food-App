const express = require('express');
const path = require('path');
const db = require('./config/connection');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('../Frontend/public'));

app.use(require('./routes'));

// Make sure MongoDB running by opening Gitbash and running 'mongod'
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/recipe-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

// create an Express GET route to connect Backend to Frontend
app.get('/express_backend', (req, res) => { 
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); 
});

db.once('open', () => {
  app.listen(PORT, () => console.log(`Server Successfully listening on localhost:${PORT}`));
});
