var express = require("express");
var app = express();
// var http = require("http").createServer(app);

// server.set("views", __dirname + "/views");
// server.set("view engine", "ejs");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.send("<h1>Hello World!</h1>")
});

app.get("/space/new", function(req, res) {
  res.render("space/new.ejs")
});

app.post("/space", function(req, res) {
  res.send("Amazing flat")
});

app.get("/index", function(req, res) {
  var space = new Space({
    name

  });
});

app.listen(3000, function() {
  console.log(":listening on port 3000");
});
