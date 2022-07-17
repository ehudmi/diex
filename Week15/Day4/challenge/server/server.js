const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());

app.get("/api/hello", (req, res) => {
  res.send("Hello From hell");
});

app.post("/api/world", (req, res) => {
  console.log(JSON.parse(req.body));
  let answer = JSON.parse(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${answer.post}`
  );
});

module.exports = app;
