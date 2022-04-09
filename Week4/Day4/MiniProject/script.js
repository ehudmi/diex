// Hangman Game

// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.

let inputWordArray = prompt(
  `Player 1 - give me a word - at least 8 letters long`
).split("");

let hangArray = new Array(inputWordArray.length).fill("*");
console.log(hangArray.join(""));

let selectArray = new Array();
let wrongArray = new Array();

let chosenLetter = "";

chosenLetter = prompt(`Player 1 - give me a letter`);

if (selectArray.includes(chosenLetter) === true) {
  console.log(selectArray);
  console.log(`this letter was already used`);
  chosenLetter = prompt(`Player 1 - give me a letter`);
} else {
  selectArray.push(chosenLetter);
  console.log(selectArray);
  inputWordArray.forEach(testLetter);
}

function testLetter(letter, index, arr) {
  if (arr[index] == chosenLetter) {
    hangArray.splice(index, 1, letter);
    console.log(hangArray[index]);
    console.log(arr[index]);
    console.log(index);
    console.log(hangArray.join(""));
    //   } else if (arr[index] == arr[arr.length - 1]) {
    //     wrongArray.push(chosenLetter);
    //     console.log(wrongArray);
    //   }
  } else {
  }
}
// function chooseLetter() {
//   if (selectArray.includes(chosenLetter)) {
//     console.log(selectArray);
//     alert(`this letter was already used`);
//     chosenLetter = prompt(`Player 1 - give me a letter`);
//   } else {
//     selectArray.push(chosenLetter);
//   }
// }

// console.log(wrongArray);

// while (wrongArray.length !== 10) {
//   chooseLetter();
//   inputWordArray.forEach(testLetter);
// }

// if (hangArray.join() === inputWordArray.join()) {
//   console.log(`You win`);
// }
