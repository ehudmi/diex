const express = require("express");
const bodyParser = require("body-parser");

const shoppingList = [
  { item: "Bananas", amount: 3 },
  { item: "Lemons", amount: 5 },
  { item: "Apples", amount: 2 },
];

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Get request for the input form and send it back
app.get("/form", (req, res) => {
  res.sendFile("C:/Github/diex/Week12/Day5/Exercise/public/form.html");
});

// Get the info from the form and send it to /shopping
// The response is the shopping list file
app.post("/shopping", (req, res) => {
  shoppingList.push({
    item: req.body.item,
    amount: Number(req.body.amount),
  });
  res.sendFile("C:/Github/diex/Week12/Day5/Exercise/public/shopping_list.html");
});

// on the same endpoint create a response with the object
app.get("/shopping", (req, res) => {
  res.send(shoppingList);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
