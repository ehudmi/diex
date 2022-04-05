// Exercise 1

function playTheGame() {
  let inputChoice = confirm(`Would you like to play a game?`);
  if (inputChoice == true) {
    let myUserNumber = prompt(`Enter a number between 1 and 10`);
    do {
      myUserNumber = Number(myUserNumber);
      if (isNaN(myUserNumber) == true) {
        alert(`Sorry Not a number, try again`);
        myUserNumber = prompt(`Enter a number between 1 and 10`);
      } else if (myUserNumber < 0 || myUserNumber > 10) {
        alert(`Sorry it\’s not a good number, try again`);
        myUserNumber = prompt(`Enter a number between 1 and 10`);
      }
    } while (
      isNaN(myUserNumber) == true ||
      myUserNumber < 0 ||
      myUserNumber > 10
    );
    let myComputerNumber = Math.random() * 10;
    myComputerNumber = myComputerNumber.toFixed(0);
    test(myUserNumber, myComputerNumber);
  } else {
    alert(`No problem, Goodbye`);
  }
}

function test(userNumber, computerNumber) {
  for (i = 0; i < 3; i++) {
    if (userNumber == computerNumber) {
      alert(`WINNER`);
      break;
    } else if (userNumber > computerNumber) {
      userNumber = prompt(
        `Your number is bigger then the computer’s, guess again`
      );
    } else if (userNumber < computerNumber) {
      userNumber = prompt(
        `Your number is smaller then the computer’s, guess again`
      );
    }
  }
  if (userNumber != computerNumber) {
    alert(`out of chances`);
  }
}

playTheGame();
