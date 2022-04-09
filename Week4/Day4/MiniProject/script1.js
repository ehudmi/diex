// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.

// Player 1
let player1 = {
  magicWord: undefined,
  starWord: undefined,
  changemagicWord() {
    let playerChoice = prompt(
      `Please choose a word with at least 8 characters`
    );
    while (playerChoice.length < 8) {
      prompt(`Your word is too short - please give me another one`);
    }
    this.magicWord = playerChoice;
    this.starWord = "*".repeat(playerChoice.length);
  },
};

// Player 2

let player2 = {
  promptALetter() {
    let guess = prompt(`Give me a letter`);
    let indices = [];
    for (let i = 0; i < player1.magicWord.length; i++) {
      let currentPlayerMagicLetter = player1.magicWord[i];
      if (player1.magicWord.length[i] === guess) {
        console.log(i);
        console.log(player1.magicWord.length[i]);
        indices.push(i);
      }
    }
    console.log(indices);
  },
  // alreadyAsked:[],
  // wrongChoices:[],
};
