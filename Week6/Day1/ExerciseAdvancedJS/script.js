// Exercise 1

// Analyze the code before executing it. What will be the output

var num = 8;
var num = 10;

console.log(num);

// The output will be 10 - var is reassigned

// Exercise 2

// Analyze the code before executing it. What will be the output

function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

// console.log(checkAge(21));

// The output will be undefined - the const "message" is only available in the scope of the if loop

// Exercise 3

// Change the code so the variable i will be undefined outside of the for loop

function numbers() {
  for (let i = 0; i < 5; i += 1) {
    console.log(i);
  }
  console.log(i);
}
// numbers();

// Exercise 4

// Create a function to check the year given by the user

// If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

// let year = prompt("what year is it?");
let year = 5;

function checkYear() {
  return Number(year) > 2000
    ? "You are in the 21st century"
    : "You live in the Middle Age";
}

console.log(checkYear(true));

// Exercise 5
// Using arrow function and ternary operator create a calculator
// that returns the result of the calculus depending on the operator : +, - , * ,

// The function should be able to to take 2 numbers as parameters

const calculator = (a, b, act) => {
  return act == "+" ? a + b : act == "-" ? a - b : a * b;
};

console.log(
  calculator(
    Number(prompt("choose first number")),
    Number(prompt("choose second number")),
    prompt("choose operator")
  )
);
