var express = require("express");
var app = express();
// var http = require("http").createServer(app);

// server.set("views", __dirname + "/views");
// server.set("view engine", "ejs");

app.get("/", function(req, res) {
  response.send("<h1>Hello World!</h1>")
});

app.get("/index", function(req, res) {
  response.render("index")
});

app.listen(3000, function() {
  console.log(":listening on port 3000");
});
