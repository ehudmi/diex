const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(__dirname + "/public"));

app.post("/", (req, res) => {});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
