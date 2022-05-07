// Exercise 1 : Analyzing The Map Method
// Instructions
// Analyze this code, what will be the output ?

console.log(
  [1, 2, 3].map((num) => {
    if (typeof num === "number") return num * 2;
    return;
  })
);

// Expected - [2,4,6]

// Exercise 2: Analyzing The Reduce Method
// Instructions
// Analyze this code, what will be the output ?

console.log(
  [
    [0, 1],
    [2, 3],
  ].reduce(
    (acc, cur) => {
      return acc.concat(cur);
    },
    [1, 2]
  )
);

// Expected - [1,2,0,1,2,3,]

// Exercise 3 : Analyze This Code
// Instructions
// Using this code:

// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i);
//   alert(num);
//   return num * 2;
// });

// What is the value of i ?

// The value of i loops and is the index of the items in the array

// Exercise 4 : Nested Arrays
// Instructions
// Using a method, take this array

const array = [[1], [2], [3], [[[4]]], [[[5]]]];

// and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.

const newArray = array.flat(1);
console.log(newArray);

// Using a method, take this array
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];

// and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].

// const greeting1 = greeting.toString();
// let greeting2 = greeting1.reduce((acc, val) => {
//   return acc + val;
// });
// console.log(greeting2);

// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.

// console.log(greeting1.toString());

// Turn the trapped number 3

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const untrapped = trapped.flat(24);

console.log(untrapped);

// into: [3]
