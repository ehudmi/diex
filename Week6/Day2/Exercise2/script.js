// Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle() {
//   return true;
// }

// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true,
// the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

const winBattle = () => {
  return true;
};

let experiencePoints = 0;

winBattle(true) ? (experiencePoints = 10) : (experiencePoints = 5);

console.log(experiencePoints);

// Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not.
// Use ternary operator
// Check out the example below to see the expected output

const isString = (arg) => {
  return typeof arg === "string" ? "this is a string" : "this is not a string";
};

console.log(isString("hello"));
console.log(isString([1, 2, 4, 0]));

// Exercise 4 : Colors
// Instructions
// Using this array :

let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Write a JavaScript program that displays the colors in the following order :
//  “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”.
//  If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.

colors.forEach((number, index) => {
  console.log(`${index + 1}# choice is ${number}`);
});

colors.includes("Violet") ? console.log("Yeah") : console.log("No...");

// Exercise 5 : Colors #2
// Instructions
// Using these arrays :

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th", "st", "nd", "rd"];

// Write a JavaScript program that displays the colors in the following order :
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

color.forEach((number, index) => {
  index < 3
    ? console.log(`${index + 1}${ordinal[index + 1]} choice is ${number}`)
    : console.log(`${index + 1}${ordinal[0]} choice is ${number}`);
});

// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses)
// so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.

let bankAmount = 0;
const VAT = "17";
let details = ["+200", "-100", "+146", "+167", "-2900"];

bankAmount = details.reduce((total, item) => {
  return Number(total) + Number(item);
});

console.log(bankAmount);

details.forEach((item, index, arr) => {
  return (arr[index] = Number(item) * (Number(VAT) / 100 + 1));
});

bankAmount = details.reduce((total, item) => {
  return Number(total) + Number(item);
});

console.log(bankAmount);
