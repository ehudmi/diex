let inputWord = prompt(`Give me a word`);

let pattern = /[aeiou]/g;

inputWord = inputWord.replace(pattern, "p");
console.log(inputWord);
