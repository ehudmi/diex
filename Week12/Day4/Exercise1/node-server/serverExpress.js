const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.write("<h1>This is an HTML Tag</h1>");
});
app.listen(3000);
