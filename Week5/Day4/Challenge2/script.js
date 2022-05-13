// Exercise 1 - Letters

// Instructions
// Daily Challenge : Show Only The Letters
// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions

let myInput = document.querySelector("#inputLetters");

const checkCharacters = (e) => {
  let keyCode = e.keyCode || e.which;
  const regScreen = /^[A-Za-z]+$/;

  let keyValid = regScreen.test(String.fromCharCode(keyCode));
  if (!keyValid) {
    alert("Not a valid letter");
    e.preventDefault();
  }
};

myInput.addEventListener("keypress", checkCharacters);
