const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const hostname = '0.0.0.0';
const port = 3000;

// Options pour enlever les warnings
const mongooseParams = {
  useUnifiedTopology : true,
  useNewUrlParser : true,
  useCreateIndex : true
}

mongoose.connect('mongodb://mongo/sqynode', mongooseParams);

app.use( bodyParser.urlencoded({extended: true}) );
app.use(bodyParser.json());

const usersRoutes = require("./api/routes/userRoutes");
usersRoutes(app);

app.listen(port, hostname);
