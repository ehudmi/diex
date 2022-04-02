// Exercise 1
for (let i = 0; i <= 15; i++) {
  if (i == 0) {
    alert(`${i} is equal to zero`);
  } else if (i % 2 == 0) {
    alert(`${i} is even`);
  } else {
    alert(`${i} is odd`);
  }
}

// Exercise 2 part1
function isLowerCase(str) {
  return str[0] == str[0].toLowerCase() && str != str[0].toUpperCase();
}

let names = ["john", "sarah", 23, "Rudolf", 34];

for (let i of names) {
  if (isNaN(i)) {
    if (isLowerCase(i) === true) {
      i = i.slice(0, 1).toUpperCase() + i.slice(1, i.length);
      console.log(i);
    } else {
      console.log(i);
    }
  } else console.log(i);
  continue;
}

// Exercise 2 part2

let names1 = ["john", "sarah", 23, "Rudolf", 34];

for (let i of names1) {
  if (isNaN(i)) {
    console.log(`I quit`);
    break;
  } else console.log(i);
  continue;
}
