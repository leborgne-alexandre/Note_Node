const path = require("path");
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const hostname = '0.0.0.0';
const port = 3000;


app.use(express.static("public"));

app.get("/", (req, res) => {
    
  res.sendFile(path.resolve(__dirname, "pages/index.html"));

  // res.render("index");
  
})

// Options pour enlever les warnings
const mongooseParams = {
  useUnifiedTopology : true,
  useNewUrlParser : true,
  useCreateIndex : true
}

mongoose.connect('mongodb://mongo/sqynode', mongooseParams);

app.use( bodyParser.urlencoded({extended: true}) );
app.use(bodyParser.json());

app.listen(port, hostname);
