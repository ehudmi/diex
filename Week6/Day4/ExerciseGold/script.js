// Exercise 1 : Nested Functions

// Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

// Change the code below to nested arrow functions.

let landscape = () => {
  let result = "";

  let flat = (x) => {
    for (let count = 0; count < x; count++) {
      result = result + "_";
    }
  };

  let mountain = (x) => {
    result = result + "/";
    for (let counter = 0; counter < x; counter++) {
      result = result + "'";
    }
    result = result + "\\";
  };

  flat(4);
  mountain(4);
  flat(4);

  return result;
};

landscape();

// Predicted result is "____/''''\____"

// Exercise 2 : Closure
// Instructions
// Analyze the code below, and before executing it, predict the outcome of the last line.

const addTo = (x) => (y) => x + y;
let addToTen = addTo(10);
addToTen(3);

// Predicted - 13

// Exercise 3 : Currying
// Instructions
// Analyze the code below, and before executing it, predict the outcome of the last line.

const curriedSum = (a) => (b) => a + b;
curriedSum(30)(1);

// Predicted - 31

// Exercise 4 : Currying
// Analyze the code below, and before executing it, predict the outcome of the last line.

const curriedSum1 = (a) => (b) => a + b;
const add5a = curriedSum1(5);
add5a(12);

// Predicted - 17

// Exercise 5 : Composing
// Analyze the code below, and before executing it, predict the outcome of the last line.

const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5b = (num) => num + 5;
compose(add1, add5b)(10);

// Predicted - 16
