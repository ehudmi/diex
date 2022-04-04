// Exercise 1 - part1
let people = ["Greg", "Mary", "Devon", "James"];

people.shift(); //1. Remove entry for Greg
// people.pop; //One possible method of changing James to Jason
// people.push("Jason");
people.splice(people.length - 1, 1, "Jason"); //2. preferred mode of changing James to Jason
people.push("Ehud"); //3. Add Ehud at the end
console.log(people.indexOf("Mary")); //4. Console log Mary's index
console.log(people.slice(1, people.length)); //5. Copy of people array using slice
console.log(people.indexOf("Foo")); // Write code that gives the index of “Foo” - it's -1 because there is no such item...
let last = people[people.length - 1]; // 7. Create a variable called last which value is the last element of the array
console.log(last);

// Exercise 1 - part2

for (let i in people) {
  console.log(people[i]);
  if (people[i] == "Jason") {
    break;
  } else {
    continue;
  }
}
// Exercise 2
let colors = ["yellow", "blue", "red", "purple", "green"];
let suffix = ["st", "nd", "rd", "th", "th"];
for (let i in colors) {
  console.log(`my #${Number(i) + 1} is ${colors[i]}`);
}
for (let i in colors) {
  console.log(`my ${Number(i) + 1}${suffix[i]} is ${colors[i]}`);
}

// Exercise 3
let inputNumber = "";
console.log(typeof inputNumber);

do {
  inputNumber = prompt(`Give me a number`);
} while (Number(inputNumber) < 10);

// Exercise 4
let building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
console.log(building.numberOfFloors); //Console.log the number of floors in the building

//Console.log how many apartments are on the floors 1 and 3
console.log(
  building.numberOfAptByFloor.firstFloor,
  building.numberOfAptByFloor.thirdFloor
);
// Console.log the name of the second tenant and the number of rooms he has in his apartment
let tenantNameX = building.nameOfTenants[1];
console.log(tenantNameX[0]);
console.log(building.nameOfTenants[1], building.numberOfRoomsAndRent.dan[0]);
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200
if (
  building.numberOfRoomsAndRent.david[1] +
    building.numberOfRoomsAndRent.sarah[1] >
  building.numberOfRoomsAndRent.dan[1]
) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
  console.log(building.numberOfRoomsAndRent.dan[1]);
} else {
  console.log(`rent is ok`);
}

// Exercise 5
let family = {
  firstName: "Mika",
  lastName: "Bibas",
  age: 32,
  food: "sushi",
};
for (let x in family) {
  console.log(x);
}
for (let x in family) {
  console.log(family[x]);
}

// Exercise 6
let details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
let str = "";
for (let x in details) {
  console.log(x, details[x]);
  str = `${str} ${x} ${details[x]}`;
}
console.log(str);

// Exercise 7

let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
console.log(
  names
    .sort()
    .map((secret) => secret[0])
    .join("")
);
