// Exercise 1
let addressNumber = 4;
let addressStreet = "Nissenboim";
let country = "Israel";
globalAddress =
  "I live at " +
  addressStreet +
  " street number " +
  addressNumber +
  ", " +
  country;

console.log(globalAddress);

// Exercise 2
let birthYear = 1966;
let futureYear = 2057;
let age = futureYear - birthYear;

console.log("I will be " + age.toFixed(2) + " in " + futureYear);

// Exercise 3
let pets = ["cat", "dog", "fish", "rabbit", "cow"];
console.log(pets);

console.log(pets[1]);

pets.splice(3, 1, "horse");
console.log(pets);

console.log(pets.length);
