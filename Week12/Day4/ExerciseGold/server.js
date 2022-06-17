const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/users", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
