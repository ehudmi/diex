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
    // let tagline = feed.title;
    // res.render("index", { tagline: tagline });
    res.render("index", {
      title: feed.title,
      items: feed.items,
    });
    // feed.items.forEach((item) => {
    //   console.log(item.title + ":" + item.link);

    // });
  })();
});

// app.get("/", function (req, res) {
//   var mascots = [
//     { name: "Sammy", organization: "DigitalOcean", birth_year: 2012 },
//     { name: "Tux", organization: "Linux", birth_year: 1996 },
//     { name: "Moby Dock", organization: "Docker", birth_year: 2013 },
//   ];
//   var tagline =
//     "No programming concept is complete without a cute animal mascot.";

//   res.render("index", {
//     mascots: mascots,
//     tagline: tagline,
//   });
// });

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.set("view engine", "ejs");
app.set("views", __dirname + "/public/pages");
app.get("/search", (req, res) => {
  res.render("search");
});

// async function doGetRequest() {
//   let res = await axios.get("http://webcode.me");

//   let data = res.data;
//   console.log(data);
// }

// doGetRequest();

// const getFeed =
