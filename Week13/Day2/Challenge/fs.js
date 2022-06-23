const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const syncRead = fs.readFileSync(path.join(__dirname, "RightLeft.txt"));

const steps = syncRead.toString().split("");
console.log(steps);
const revSteps = steps.map((value) =>
  value == ">" ? (value = 1) : (value = -1)
);

const countSteps = revSteps.reduce((acc, curr, index) => {
  let total = acc + curr;
  return total;
}, 0);
console.log(`Total Steps: ${countSteps + 1}`);

let totSteps = 0;
const countStepsBeyond0 = revSteps.reduce((acc, curr, index) => {
  let total = acc + curr;
  if (total == -1) {
    totSteps = total;
    return index;
  }
  return acc + curr;
}, 0);
console.log(
  `Total Steps: ${totSteps}\nFirst time in left side is in ${countStepsBeyond0} steps`
);

app.listen(3000, () => {
  console.log("Server up and running on port 3000");
});
