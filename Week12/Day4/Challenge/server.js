const express = require("express");
const bodyParser = require("body-parser");
const extractnumbers = require("extract-numbers");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/aboutMe/:hobby", (req, res) => {
  const hobbies = [
    { id: 1, hobby: "reading" },
    { id: 2, hobby: "tv" },
    { id: 3, hobby: "porn" },
  ];
  let i = hobbies.findIndex((ob) => ob.hobby == req.params.hobby);
  extractnumbers(req.params.hobby) == null
    ? res.json(hobbies[i])
    : res.status(404).send("These are not the droids");
});

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
