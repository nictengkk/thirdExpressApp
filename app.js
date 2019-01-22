var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

var friends = ["Vig", "Chester", "FAMF", "Ammar", "Theo"];

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/friends", function(req, res) {
  res.render("friends", { friends: friends });
});

app.post("/addfriends", function(req, res) {
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
});

app.listen(5500, function(req, res) {
  console.log("server is running!");
});
