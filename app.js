var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/friends", function(req, res) {
  var friends = ["Vig", "Chester", "FAMF", "Ammar", "Theo"];
  res.render("friends", { friends: friends });
});

app.listen(5500, function(req, res) {
  console.log("server is running!");
});
