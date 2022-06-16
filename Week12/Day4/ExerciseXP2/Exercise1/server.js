const express = require("express");
const app = express();

app.use(express.static(__dirname + "/public"));

app.get("/home", (req, res) => {
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  console.log(user);
  res.send(user);

  //   res.sendFile("C:/Github/diex/Week12/Day4/ExerciseXP2/Exercise1/public/new_index.html");
});

app.listen(3000, () => console.log("Listening now on port 3000"));
