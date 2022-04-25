// Exercise 1 - ForEach

let myArr = [10, 11, 12, 15, 20];

// Create a function that selects only the even numbers in the array myArr

// let newArr = [];
myArr.forEach((number, i) => {
  if (number % 2 == 0) {
    console.log(number);
  }
});
// console.log(newArr);

// Exercise 2 - some

let myArr1 = ["wow", "hey", "bye"];

// Check if at least one element of the array starts with the letter 'h'

const checkArray = myArr1.some((item) => {
  return item.charAt(0) == "h";
});

console.log(checkArray);

// Exercise 2 - Every

let myArr2 = ["hello", "hey", "hola"];

// Check if all the elements of the array start with the letter 'h'

const checkArrayNew = myArr2.every((item) => {
  return item.charAt(0 == "h");
});

console.log(checkArrayNew);
