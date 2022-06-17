const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const shoppingList = [
  { id: 1, name: "Big Desk", price: 300 },
  { id: 2, name: "Small Desk", price: 150 },
  { id: 3, name: "Lamp", price: 80 },
];
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/items", (req, res) => {
  res.json(shoppingList);
});

app.get("/items/:id", (req, res) => {
  let i = shoppingList.findIndex((ob) => ob.id == req.params.id);
  res.json(shoppingList[i]);
});

app.post("/item", (req, res) => {
  console.log(req.body);
  shoppingList.push({
    id: Number(req.body.id),
    name: req.body.itemName,
    price: Number(req.body.price),
  });
  console.log(shoppingList);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
