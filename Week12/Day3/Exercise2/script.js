const express = require("express");
const app = express();

// Create a middleware that retrieves today's date and the current time (H/M/S)

// Create 2 routes

// 1. Call this middleware before every route

// 2. Call this middleware before the 2nd route

app.use(dateTimeMiddleware);

app.get("/home", (req, res) => {
  res.send('these are not the droids you"re looking for');
});

app.get("/users", dateTimeMiddleware);

function dateTimeMiddleware(req, res, next) {
  res.send(new Date());
  next();
}
app.listen(3000, () => console.log("Example app listening on port 3000!"));
