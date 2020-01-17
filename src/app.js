const path = require("path");
const { config, engine } = require("express-edge");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expression = require('express-session');
const app = express();
const hostname = "0.0.0.0";
const port = 3000;
const User = require("./api/models/userModels");
const Session = require("./api/models/sessionModels");

app.use(express.static("public"));
app.use(engine);
app.use(expression({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));
app.set("views", `${__dirname}/views`);

// app.get("/", (req, res) => {
//   // res.sendFile(path.resolve(__dirname, "pages/index.html"));
//   res.render("user-admin");
// });


app.get("/userinview", async (req, res) => {
  const users = await User.find({});
  const sessions = await Session.find({});
  res.render("user-admin", { sessions, users });
  
});


app.get('/', async (req, res) => {
  const users = await User.find({})
  const session = await Session.find({})
  res.render('index')
})


// Options pour enlever les warnings
const mongooseParams = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
};

mongoose.connect("mongodb://mongo/sqynode", mongooseParams);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const usersRoutes = require("./api/routes/adminUserRoutes");
usersRoutes(app);

const adminModulesRoutes = require("./api/routes/adminModulesRoutes");
adminModulesRoutes(app);
const userScoreRoutes = require("./api/routes/userScoreRoutes");
userScoreRoutes(app);

const adminSessionRoutes = require("./api/routes/adminSessionRoutes");
adminSessionRoutes(app);

app.listen(port, hostname);
