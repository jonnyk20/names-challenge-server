const express = require('express');
require('dotenv').config();
const app = express();
port = process.env.PORT || 3000;
mongoose = require('mongoose');
bodyParser = require('body-parser');
require('./imageModel'); //created model loading here

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./imageRoutes'); //importing route
routes(app); //register the route

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port);

console.log('Images RESTful API server started on: ' + port);
