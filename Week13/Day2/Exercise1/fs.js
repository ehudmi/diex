const { text } = require("body-parser");
const fs = require("fs");

fs.readFile("./test.txt", (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    const myText = data.toString();
    console.log(myText);
  }
});
