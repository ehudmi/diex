// Exercise 1
console.log(5 >= 1);
// Prediction:true It will compare the 2 numbers
// Actual:true

console.log(0 === 1);
// Prediction:false It will compare the 2 numbers
// Actual:false

console.log(4 <= 1);
// Prediction:false It will compare the 2 numbers
// Actual:false

console.log(1 != 1);
// Prediction:false It will compare the 2 numbers. 1 cannot be NOT 1
// Actual:false

console.log("A" > "B");
// Prediction:false It will compare the 2 strings based on their alphabetical order
// Actual:false

console.log("B" < "C");
// Prediction:true It will compare the 2 strings based on their alphabetical order
// Actual:true

console.log("a" > "A");
// Prediction:NaN It will compare the 2 strings based on their alphabetical order but cannot determine capitalization order
// Actual:true

console.log("b" < "A");
// Prediction:false It will compare the 2 strings based on their alphabetical order disregarding capitalization
// Actual:false

console.log(true === false);
// Prediction:false It will compare the 2 values - their value is different
// Actual:false

console.log(true != true);
// Prediction:false It will compare the 2 values. true cannot be NOT true
// Actual:false
