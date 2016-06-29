var express = require("express");
var app = express();
var user = require('./src/user');
var bodyParser = require('body-parser')
// var http = require("http").createServer(app);
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// server.set("views", __dirname + "/views");
// server.set("view engine", "ejs");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.send("<h1>Hello World!</h1>");
});

app.get("/index", function(req, res) {
  res.render("index.ejs");
});

app.get("/users/new", function(req, res) {
  res.render("users/new.ejs");
});

//pull in thinky into the application
var thinky = require('thinky')({
  host: 'localhost',
  port: 28015,
  db: 'makersBnbTest'
});

var r = thinky.r;
var type = thinky.type;

var User = thinky.createModel("User", {
  name: type.string(),
  email: type.string(),
  password: type.string()
});

app.post("/users", function(req, res) {
  var user = new User({
    name: req.body.name,
     email: req.body.email,
     password: req.body.password
  });
  user.save().then(function(result) {
        res.json({
            result: result
        });
    });

  res.redirect("/");
});

app.listen(3000, function() {
  console.log(":listening on port 3000");
});
