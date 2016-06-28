var express = require("express");
var app = express();
// var http = require("http").createServer(app);

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




app.listen(3000, function() {
  console.log(":listening on port 3000");
});
