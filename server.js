// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const exphbs = require("express-handlebars");
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
//incription factor constant //
const SALT_WORK_FACTOR = 12;
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
// handle bars //
app.use(express.static(process.cwd() + "/public"));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Static directory
app.use(express.static("./public"));
// passport //
app.use(session({
  secret: "user secret",
  cookie: {_expires: 10000000},
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize()); //initializes the session
app.use(passport.session()); //tells passport to be in charge of the session
app.use(flash());
// App constants //
app.use((request, response, next) => {
  response.locals.user = request.user || null;
  next();
})
// Routes =============================================================


require("./controllers/controller.js")(app);

// Syncing our sequelize models and then starting our express app
db.sequelize.sync().then(()=> {
  app.listen(PORT, ()=> {
    console.log(`App listening on PORT  ${PORT}`);
  });
});
