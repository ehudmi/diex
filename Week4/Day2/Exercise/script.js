// Exercise 1 - part 1
function infoAboutMe() {
  console.log(`My name is Ehud, I'm 55 and I like Netflix`);
}
infoAboutMe();

// Exercise 1 - part 2
function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(
    `Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`
  );
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Exercise 2 - Tips

function calculateTip() {
  let tip = 0;
  let bill = prompt(`Dear John - How much did you pay?`);
  bill = bill;
  if (bill < 50) {
    tip = bill * 0.2;
  } else if (bill <= 200) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.1;
  }
  console.log(
    `the tip is ${tip} and the total bill is ${Number(tip) + Number(bill)}`
  );
}

calculateTip();

// Exercise 3

function isDivisible() {
  let iSum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % 23 == 0) {
      console.log(i);
      iSum = iSum + i;
    }
  }
  console.log(iSum);
}

isDivisible();

// Exercise 3 - Bonus

function isDivisible1(divisor) {
  let iSum = 0;
  for (let i = 0; i <= 500; i++) {
    if (i % divisor == 0) {
      console.log(i);
      iSum = iSum + i;
    }
  }
  console.log(iSum);
}

isDivisible1(45);

// Exercise 4

let stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

let prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};
let shoppingList = { banana: 1, orange: 1, apple: 1 };

function myBill() {
  let sumList = 0;
  for (let x in shoppingList) {
    if (stock[x] > 0) {
      sumList = sumList + prices[x] * 1;
      stock[x] = stock[x] - 1;
    }
  }
  console.log(sumList);
}
myBill();

// Exercise 5

function changeEnough(itemPrice, amountOfChange) {
  let myMoney =
    (amountOfChange[0] * 25 +
      amountOfChange[1] * 10 +
      amountOfChange[2] * 5 +
      amountOfChange[3]) /
    100;
  if (myMoney >= itemPrice) {
    console.log(myMoney);
    return true;
  } else {
    console.log(myMoney);
    return false;
  }
}

// Exercise 6

function hotelCost() {
  let stayTime = prompt(`How Many nights would you like to stay?`);
  if (stayTime.length === 0 || isNaN(stayTime)) {
    stayTime = prompt(`How Many nights would you like to stay?`);
  } else {
    return stayTime * 140;
  }
}
function planeRideCost() {
  let destination = prompt(`What is your destination?`);
  destination = destination.toLowerCase();
  if (destination.length === 0 || typeof destination === !String) {
    console.log(typeof destination);
    destination = prompt(`What is your destination?`);
  } else if (destination == "london") {
    return 183;
  } else if (destination == "paris") {
    return 220;
  } else {
    return 300;
  }
}

function rentalCarCost() {
  let rentalDays = prompt(`How many days would you like the car for?`);
  if (rentalDays.length === 0 || isNaN(rentalDays)) {
    rentalDays = prompt(`How many days would you like the car for?`);
  } else if (rentalDays > 10) {
    return rentalDays * 40 * 0.95;
  } else {
    return rentalDays * 40;
  }
}

function totalVacationCost() {
  //   console.log(
  //     `The car cost: $${rentalCarCost()}, the hotel cost: $${hotelCost()}, the plane tickets cost: $${planeRideCost()}`
  //   );
  return hotelCost() + planeRideCost() + rentalCarCost();
}
console.log(totalVacationCost());

// Exercise 6 - Bonus

function hotelCost(stayTime) {
  if (stayTime.length === 0 || isNaN(stayTime)) {
    stayTime = prompt(`How Many nights would you like to stay?`);
  } else {
    return stayTime * 140;
  }
}
function planeRideCost(destination) {
  destination = destination.toLowerCase();
  if (destination.length === 0 || typeof destination === !String) {
    console.log(typeof destination);
    destination = prompt(`What is your destination?`);
  } else if (destination == "london") {
    return 183;
  } else if (destination == "paris") {
    return 220;
  } else {
    return 300;
  }
}

function rentalCarCost(rentalDays) {
  if (rentalDays.length === 0 || isNaN(rentalDays)) {
    rentalDays = prompt(`How many days would you like the car for?`);
  } else if (rentalDays > 10) {
    return rentalDays * 40 * 0.95;
  } else {
    return rentalDays * 40;
  }
}

function totalVacationCost() {
  return (
    hotelCost(prompt(`How Many nights would you like to stay?`)) +
    planeRideCost(prompt(`What is your destination?`)) +
    rentalCarCost(prompt(`How many days would you like the car for?`))
  );
}
console.log(totalVacationCost());
