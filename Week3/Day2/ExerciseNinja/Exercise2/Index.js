let string1 = prompt("Insert numbers separated by commas", "");
console.log(string1);

console.log(string1);
let numArray = string1.split(",").map(Number);
console.log(numArray);

let sum = numArray.reduce(function (a, b) {
  return a + b;
}, 0);

console.log(sum);
