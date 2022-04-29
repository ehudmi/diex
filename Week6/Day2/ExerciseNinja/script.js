// Exercise 1 : Menu
// Instructions
// Using the array below:

let menu = [
  {
    type: "starter",
    name: "Houmous with Pita",
  },
  {
    type: "starter",
    name: "Vegetable Soup with Houmous peas",
  },
  {
    type: "dessert",
    name: "Chocolate Cake",
  },
];

// Using an array method and ternary operator, check if at least one element in the menu array is a dessert.

menu.some((item) =>
  item.type === "dessert" ? console.log(`${item.name} is a ${item.type}`) : null
);

// Using an array method, check if all the elements in the array are starters.

menu.every((item) =>
  item.type == "starter"
    ? console.log(`all the items are ${item.type}s`)
    : console.log(`not all the items are ${item.type}s`)
);

// Using an array method, check if there is at least one element in the array that is a main course.
// If not, add a main course of your choice to the array.

menu.includes("main course")
  ? console.log(`there already is a ${item.type}`)
  : menu.push({ type: "main course", name: "Ragout" });

console.log(menu);

// Using this array :

let vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

// Using an array method, add a key “vegetarian” (a boolean) to the menu array.
// The value of the key should be true if the name of the course contains at least one element from the vegetarian array.

// menu.forEach((item, index) => {
//   item["vegetarian"] = item.name.includes(vegetarian[index]) ? "true" : "false";
//   console.log(item.name.includes(vegetarian[index]));
// });
// console.log(menu);

vegetarian.forEach((item) =>
  menu[0].name.includes(item) ? console.log("true") : console.log("false")
);

// Exercise 2 : Chop Into Chunks
// Instructions
// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter),
// and the outcome should be represented in an array.
// Example:

// console.log(string_chop("developers", 2));
// ["de", "ve", "lo", "pe", "rs"];

// const myChop =(str,num)=>{str}

// Exercise 3 : You Said String ?
// Instructions
// Write a JavaScript function to find a word within a string.
// console.log(search_word('The quick brown fox', 'fox'));
// "'fox' was found 1 times."

// Exercise 4 : Reverse Array
// Instructions
// Write a function called reverseArray which accepts an array and returns the array with all values reversed.
// See if you can do this without creating a new array!
// Examples:

// reverseArray([1, 2, 3, 4, 5]); // [5,4,3,2,1]
// reverseArray([1, 2]); // [2,1]
// reverseArray([]); // []
// reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // [10,9,8,7,6,5,4,3,2,1]
