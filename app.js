const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");

app.engine("ejs", ejsMate);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("socialmedia/home");
});

app.get("/feed", (req, res) => {
  res.render("socialmedia/feed");
});

app.get("/home", (req, res) => {
  res.render("socialmedia/home");
});

app.get("/login", (req, res) => {
  res.render("socialmedia/login");
});

app.get("/knowmore", (req, res) => {
  res.render("socialmedia/knowmore");
});

app.get("/quote", (req, res) => {
  res.render("socialmedia/quote");
});

app.get("/splashscreen", (req, res) => {
  res.render("socialmedia/splashscreen");
});

const port = "3110";
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});
