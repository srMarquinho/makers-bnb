var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var Space = require("./src/space");
// var http = require("http").createServer(app);
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// server.set("views", __dirname + "/views");
// server.set("view engine", "ejs");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.send("<h1>Hello World!</h1>")
});

app.get("/index", function(req, res) {
  res.render("index.ejs");
})

app.get("/spaces/new", function(req, res) {
  res.render("spaces/new.ejs")
});

app.post("/spaces", function(req, res) {
  var space = new Space({
    name : req.body.name,
    description : req.body.description,
    price : req.body.price,
    available : true
  });
  space.save().then(function(result) {
    res.json({
      result: result
    });
  });
  res.redirect("/spaces");
});

app.get("/spaces" function(req, res) {
  res.render("spaces/index.ejs")
});

app.listen(3000, function() {
  console.log(":listening on port 3000");
});
