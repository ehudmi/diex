const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

// handling register GET request
app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/public/register.html");
});

// handling register POST request
app.post("/register", (req, res) => {
  fs.readFile(__dirname + "/users.json", (err, data) => {
    if (err) {
      console.error(err);
      return;
    } else {
      users = JSON.parse(data);
      let foundUser = users.findIndex(
        (value, index) => users[index].userName == req.body.userName
      );
      let foundPassword = users.findIndex(
        (value, index) => users[index].password == req.body.password
      );
      if (foundUser == -1 && foundPassword == -1) {
        console.log("no such username or password");
        users.push(req.body);
        fs.writeFile(
          __dirname + "/users.json",
          JSON.stringify(users),
          (err) => {
            if (err) {
              console.log(err);
            } else console.log("Write operation complete.");
          }
        );
        res.send("Hello - Your account is now created!");
      } else {
        res.send("username or password already exist");
      }
    }
  });
});

// handling login GET request
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/login.html");
});

// handling login post request
app.post("/login", (req, res) => {
  fs.readFile(__dirname + "/users.json", (err, data) => {
    if (err) {
      console.error(err);
      return;
    } else {
      users = JSON.parse(data);
      let currentUser = users.findIndex(
        (value, index) => users[index].userName == req.body.userName
      );
      if (currentUser == -1) {
        res.send("username is not registered");
      } else if (
        currentUser !== -1 &&
        users[currentUser].password == req.body.password
      ) {
        res.send(`Hi ${req.body.userName}, Welcome back again!`);
      } else if (
        currentUser !== -1 &&
        users[currentUser].password !== req.body.password
      ) {
        res.send(`Hi ${req.body.userName}, your password is wrong!`);
      }
    }
  });
});

app.listen(3000, () => {
  console.log("Server up and listening on port 3000");
});
