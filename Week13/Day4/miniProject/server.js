const express = require("express");
const app = express();
let Parser = require("rss-parser");
let parser = new Parser();
const axios = require("axios");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("The server is running on port 3000");
});

app.set("view engine", "ejs");
app.set("views", __dirname + "/public/pages");

let feedItems;

const getCategories = (feedItems) => {
  const categories = new Set();
  feedItems.forEach((item) => {
    item.categories.forEach((category) => {
      categories.add(category);
    });
  });
  return categories;
};

const getPostsByCategory = (feedItems, category) => {
  return feedItems.filter((item) => item.categories.includes(category));
};

const getPostsByTitle = (feedItems, title) => {
  return feedItems.filter((item) =>
    item.title.toLowerCase().includes(title.toLowerCase())
  );
};

const getFeed = async () => {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");
  console.log(feed.items.length);
  feedItems = feed["items"];
};

app.get("/", async (req, res) => {
  {
    await getFeed();
    res.render("index", {
      items: feedItems,
    });
  }
});

app.get("/search", (req, res) => {
  const categories = getCategories(feedItems);
  res.render("search", { categories });
});

app.post("/search/title", async (req, res) => {
  await getFeed();
  const categories = getCategories(feedItems);
  const titleSearch = req.body.title;
  const filteredPosts = getPostsByTitle(feedItems, titleSearch);
  res.render("search", { filteredPosts, categories });
});

app.post("/search/category", async (req, res) => {
  await getFeed();
  const categories = getCategories(feedItems);
  const categorySearch = req.body.category;
  const filteredPosts = getPostsByCategory(feedItems, categorySearch);
  res.render("search", { filteredPosts, categories });
});
