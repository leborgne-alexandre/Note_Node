const path = require("path");
const { config, engine } = require("express-edge");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const hostname = "0.0.0.0";
const port = 3000;

app.use(express.static("public"));
app.use(engine);
app.set("views", `${__dirname}/views`);

app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "pages/index.html"));
  res.render("user-admin");
});

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
