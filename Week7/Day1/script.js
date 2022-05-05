// Exercise 1 - Map
// Analyze this code before executing it. What will be the output ?

myArr = [10, 20, 30, 40];

let newArr = myArr.map((val, i, arr) => {
  return {
    value: val,
    index: i,
  };
});

console.log(newArr);

// Predicted - newArr=[10,20,30,40]

// Exercise 2 - Reduce
// Use the reduce() method to sum up all the calories of every desert, except Apple Pie.

// The output should be 85

let party = [
  {
    desert: "Chocolate Mousse",
    calories: 30,
  },
  {
    desert: "Apple Pie",
    calories: 15,
  },
  {
    desert: "Croissant",
    calories: 50,
  },
  {
    desert: "Strawberry Ice-cream",
    calories: 5,
  },
];

let sumCal = party.reduce((acc, val, index) => {
  val = party[index].calories;
  if (party[index].desert == "Apple Pie") {
    return acc + 0;
  } else return acc + val;
}, 0);

console.log(sumCal);

// Exercise
// Analyze this code before executing it. What will be the output ?

let prices = [12, 20, 18];
let newPriceArray = [...prices];
console.log(newPriceArray);

// newPriceArray=[12,20,18]

let alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);

// alphabets=["A","B","C","D","E"]
