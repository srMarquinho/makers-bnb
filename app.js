var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var space = require("./src/space");
var user = require('./src/user');
var thinky = require('thinky')({
  host: 'localhost',
  port: 28015,
  db: 'makersBnbTest'
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.listen(3000, function() {
  console.log(":listening on port 3000");
});

// INDEX
app.get("/", function(req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/index", function(req, res) {
  res.render("index.ejs");
});

// USERS
app.get("/users/new", function(req, res) {
  res.render("users/new.ejs");
});

app.post("/users", function(req, res) {
  user.add(req, res);
  res.redirect("/");
});

// SPACES
app.get("/spaces/new", function(req, res) {
  res.render("spaces/new.ejs");
});

app.post("/spaces", function(req, res) {
  space.add(req, res);
  res.redirect("/spaces");
});

app.get("/spaces", function(req, res) {
  // res.render("spaces/index.ejs");
  space.getAll(req, res);
});

app.get("/spaces/booking", function(req, res) {
  res.render("spaces/booking.ejs");
});

app.get("/spaces/request-confirmation", function(req, res) {
  res.render("spaces/requestConfirmation.ejs");
});
