const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/aboutMe/:hobby", (req, res) => {});

app.get("/pic", (req, res) => {
  res.sendFile("C:/Github/diex/Week12/Day4/Challenge/public/image.html");
});

app.get("/form", (req, res) => {
  res.sendFile("C:/Github/diex/Week12/Day4/Challenge/public/form.html");
});

app.post("/formData", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
