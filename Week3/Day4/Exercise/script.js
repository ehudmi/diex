// Exercise 1
let x = 5;
let y = 2;
if (x > y === true) {
  console.log(`x is bigger than y`);
} else if ((x == y) === true) {
  console.log(`y is equal to x`);
} else {
  console.log(`y is bigger than x`);
}

// Exercise 2
let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

// Exercise 3
let inputNumber = prompt(`Choose your death number`);
if ((inputNumber == 0) == true) {
  console.log(
    `you being funny sonny? - your chosen number is 0 - neither even nor odd`
  );
} else if ((inputNumber % 2 == 0) == true) {
  console.log(`The number is even`);
} else {
  console.log(`The number is odd`);
}

// Exercise 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
let onlineUsers = prompt(`How many users are online now?`);
switch ((onlineUsers == 2) === true) {
  case true:
    console.log(`${users.slice(0, 1)} and ${users.slice(1, 2)} are online`);
    break;
  case false:
    switch (onlineUsers < 2 === true) {
      case true:
        switch ((onlineUsers == 0) === true) {
          case true:
            console.log(`there are no online users`);
            break;
          case false:
            console.log(`${users.slice(0, 1)} is online`);
            break;
        }
        break;
      case false:
        console.log(
          `${users.slice(0, 1)} and ${users.slice(1, 2)} and ${
            users.length - 1
          } more are online`
        );
        break;
    }
}
