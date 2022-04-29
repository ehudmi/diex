// Exercise 1: Sum Elements
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.

const myArray = [1, 2, 3, 4, 5, 6];

console.log(myArray.reduce((total, item) => total + item));

// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.

const myArray1 = [1, 5, 6, 3, 4, 2, 5, 3];

let uniArray = [...new Set(myArray1)];
console.log(uniArray);

let uniArray1 = myArray1.filter(
  (val, index) => myArray1.indexOf(val) === index
);
console.log(uniArray1);

// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

let myArray2 = [NaN, 0, 15, false, -22, "", undefined, 47, null];

myArray2 = myArray2.filter((item) => item === Number(item));

console.log(myArray2);

// Exercise 4 : Repeat Please !
// Instructions
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
// console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"

let str = "Hello";
console.log(str.repeat(5));

// Exercise 5 : Turtle & Rabbit
// For this exercise, look at the lesson More JS methods.

// Using this code :

const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

// Line up the Turtle and the Rabbit at the start line.
// Expected Output:

turtle = turtle.padStart(
  startLine.length - startLine.trimStart().length + turtle.length + 2
);
rabbit = rabbit.padStart(
  startLine.length - startLine.trimStart().length + rabbit.length + 2
);
console.log(startLine);
console.log(turtle);
console.log(rabbit);

//     When you write:

//     console.log(startLine);
//     console.log(turtle);
//     console.log(rabbit);

//     It should look like this:

//     '     ||<- Start line'
//     '       🐢'
//     '       🐇'

// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?
turtle = "🐢========";
