const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const { json } = require("body-parser");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Get request for the input form and send it back
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

// Get the info from the form and send it to /shopping
// Read the file into an array
// add the new item into the array
// write back to the file
app.post("/items", (req, res) => {
  fs.readFile(__dirname + "/items.json", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let items = JSON.parse(data);
      const new_item = {
        id: String(items.length + 1),
        item: req.body.item,
        price: req.body.price,
      };
      items.push(new_item);
      fs.writeFile(__dirname + "/items.json", JSON.stringify(items), (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log("Wrote shopping list");
        }
      });
    }
  });
  res.send("We have no cheese");
});

// on the same endpoint create a response with the list of items
app.get("/items", (req, res) => {
  fs.readFile(__dirname + "/items.json", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(JSON.parse(data));
    }
  });
});

// Find specific item

app.get("/items/:id", (req, res) => {
  fs.readFile(__dirname + "/items.json", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      let items = JSON.parse(data);
      const id = req.params.id;
      const item = items.find((item) => item.id == id);
      if (!item) {
        return res.status(404).json({ msg: "not found" });
      }
      res.json(item);
    }
  });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
