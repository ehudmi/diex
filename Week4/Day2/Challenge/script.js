// Exercise 1

let wordArray = prompt(`Give me your wise words`);

wordArray = wordArray.split(" ");
console.log(wordArray);

let longestWord = 0;
let starArray = [];
// function countLetters() {
for (let i in wordArray) {
  if (wordArray[i].length > longestWord) {
    longestWord = wordArray[i].length;
  }
}
// }

// function fillArray() {
// starArray[0] = "*".repeat(longestWord + 2);
for (let i in wordArray) {
  if (wordArray[i].length == longestWord) {
    starArray[i] = "*" + wordArray[i] + "*";
  } else if (wordArray[i].length % 2 == 0) {
    starArray[i] =
      "*" +
      " ".repeat((longestWord - wordArray[i].length) / 2) +
      wordArray[i] +
      " ".repeat((longestWord - wordArray[i].length) / 2) +
      "*";
  } else {
    starArray[i] =
      "*" +
      " ".repeat((longestWord - wordArray[i].length) / 2) +
      wordArray[i] +
      " ".repeat((longestWord - wordArray[i].length) / 2 + 1) +
      "*";
  }
}
// }
starArray.unshift("*".repeat(longestWord + 2));
starArray[starArray.length] = "*".repeat(longestWord + 2);
for (let i in starArray) {
  console.log(starArray[i]);
}
