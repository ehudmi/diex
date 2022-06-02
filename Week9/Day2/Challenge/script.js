// Instructions
// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise.
// The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

const makeAllCaps = (wordArray) => {
  return new Promise((resolve, reject) => {
    if (wordArray.every((value) => typeof value == "string" && value != "")) {
      resolve(wordArray.map((value) => value.toUpperCase()));
    }
    reject("the array is not all words");
  });
};

const sortWords = (wordArray) => {
  return new Promise((resolve, reject) => {
    if (wordArray.length > 4) {
      resolve(wordArray.sort());
    }
    reject("the array is shorter than 4");
  });
};

makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));

// 2nd Daily Challenge
let morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// Create three functions. The two first functions should return a promise..

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)
// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.
// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.

const toJs = () => {
  return new Promise((resolve, reject) => {
    if (JSON.parse(morse) == "") {
      reject("this is an empty object");
    }
    resolve(JSON.parse(morse));
  });
};

const toMorse = (morseJS) => {
  return new Promise((resolve, reject) => {
    let word = prompt("please input a word").split("");
    let morseTranslationArray = [];
    word.forEach((value) => {
      if (morseJS.hasOwnProperty(value)) {
        morseTranslationArray.push(morseJS[value]);
      } else
        reject(
          `The character ${value} doesn't exist in the morse javascript object`
        );
    });
    console.log(morseTranslationArray);
    resolve(morseTranslationArray);
  });
};

const joinWords = (morseTranslation) => {
  document.open();
  document.write(morseTranslation.join("<br>"));
  document.close();
};

toJs()
  .then(toMorse)
  .then(joinWords)
  .catch((error) => console.log(error));
