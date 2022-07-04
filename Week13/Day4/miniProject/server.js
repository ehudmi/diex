const express = require("express");
const app = express();
let Parser = require("rss-parser");
let parser = new Parser();
const axios = require("axios");

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});

app.set("view engine", "ejs");
app.set("views", __dirname + "/public/pages");
app.get("/", (req, res) => {
  (async () => {
    let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
    console.log(feed.title);
    res.render("index", {
      title: feed.title,
      items: feed.items,
    });
  })();
});

app.get("/search", (req, res) => {
  res.render("search");
});
