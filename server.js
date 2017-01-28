// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const passport = require('passport');
const http = require('http');
// const cookieParser = require('cookie-parser');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// passport middlewear //
// app.use(express.cookieParser());
// app.use(express.urlencoded());
// app.use(express.session({secret:'security'}));
app.use(passport.initialize());
app.use(passport.session());
// handle bars //
app.use(express.static(process.cwd() + "/public"));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Static directory
app.use(express.static("./public"));

// Routes =============================================================


require("./controllers/controller.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(()=> {
  app.listen(PORT, ()=> {
    console.log(`App listening on PORT  ${PORT}`);
  });
});
