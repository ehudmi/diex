// Exercise 1
let sentence = ["my", "favorite", "color", "is", "blue"];
console.log(sentence.join(" "));

// Exercise 2
let str1 = "mix";
let str2 = "pod";

console.log(str1.slice(0, 2));
console.log(str2.slice(0, 2));

console.log(str1.slice(0, 2) + str2.slice(2, 3));
console.log(str2.slice(0, 2) + str1.slice(2, 3));

let str3 =
  str1.slice(0, 2) +
  str2.slice(2, 3) +
  " " +
  str2.slice(0, 2) +
  str1.slice(2, 3);
console.log(str3);

// Exercise 3
let num1 = prompt("Pick the first number");
console.log(typeof num1);
let num2 = prompt("Pick the second number");
// let oper1= prompt("Enter the operator")
sum = Number(num1) + Number(num2);
alert("your number is " + sum);
