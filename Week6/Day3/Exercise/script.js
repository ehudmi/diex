// Exercise 1 - Nested Functions

// Analyze this code before executing it. Write explanatory comments. What will be the output ?

function add() {
  //We declare a function and name it Add
  let counter = 0;
  function plus() {
    //We create a nested function called plus
    counter += 1;
    //The function adds 1 to the variable counter that is defined in the scope of Add
    console.log(counter);
  }
  //We call function plus
  plus();
}
//The function will run once and output nothing by itself - the function plus will output 1
add();

// Exercise 2 - Closure

// Analyze this code before executing it. Write explanatory comments. What will be the output ?
// The Output will be 1, 1, 1

let add1 = (function () {
  let counter = 0;
  function calculus() {
    counter += 1;
    return counter;
  }
  return calculus;
})();

add1();
add1();
add1();

// Actual output is nothing but the value is incremented by 1 every time the function runs...

// Exercise 3 - Currying

// Analyze this code before executing it. Write explanatory comments

// Each function - g and f are partial. function h takes a parameter and passes it to the partial function
// so the argument passed to the functions is 20 - function g - the innermost returns 20+1 and then
// function g takes 21 and doubles it giving 42

const g = (n) => n + 1;
const f = (n) => n * 2;

const h = (x) => f(g(x));

h(20); //=> 42

// Exercise 4 - Advanced Objects

// Analyze the code before executing it. What will be the output
// The output will be the object keys - name,age

const person = {
  name: "Lydia",
  age: 21,
};

for (const item in person) {
  console.log(item);
}

// Exercise 5 - Pass by Reference vs. Pass by Value

// Analyze the code before executing it. What will be the output
// because objects are passed by reference - changing the greeting key changes it for both c and d
// because they refer to the same object

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
