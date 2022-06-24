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
console.log(`Total Steps: ${countSteps}`);

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

// const where_am_i_2 = () => {
//   fs.readFile(path.join(__dirname, "RightLeft.txt"), (err, data) => {
//     const direction = data.toString();
//     const arr = direction.split("");

//     let index = 0;
//     let steps = 0;

//     const x = arr.some((currentValue) => {
//       if (currentValue === ">") {
//         ++index;
//       } else if (currentValue === "<") {
//         --index;
//       }
//       steps++;
//       return index < 0;
//     });

//     console.log(steps);

// for(x of arr){
//   if(x==='>'){
//     steps++;
//   }
//   else if(x==='<'){
//     steps--;
//   }
//   index++
//   if(steps < 0) {
//     break;
//   }
// }
// console.log(index);
//   });
// };
// where_am_i_2();

app.listen(3000, () => {
  console.log("Server up and running on port 3000");
});
