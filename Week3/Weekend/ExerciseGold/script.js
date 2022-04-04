// Exercise 1

let numbers = [123, 8409, 100053, 333333333, 7];
for (let x in numbers) {
  if (numbers[x] % 3 == 0) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }
}

// Exercise 2

// let guestList = {
//   randy: "Germany",
//   karla: "France",
//   wendy: "Japan",
//   norman: "England",
//   sam: "Argentina",
// };
// let inputName = prompt(`What is your first name?`);
// if (inputName in guestList) {
//   console.log(`Hi! I'm ${inputName}, and I'm from ${guestList[inputName]}.`);
// } else {
//   console.log(`Hi! I'm a guest.`);
// }

// Exercise 3

let age = [20, 5, 12, 43, 98, 55];
let x = 0;
for (let i in age) {
  x = x + age[i];
}
console.log(x);

let y = 0;
for (let i in age) {
  if (age[i] > y) {
    y = age[i];
  } else {
    continue;
  }
}
console.log(y);
