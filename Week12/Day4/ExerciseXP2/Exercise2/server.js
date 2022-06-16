const express = require("express");
const app = express();

app.get("/:id", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});
app.listen(3000, () => console.log("Listening on port 3000"));
