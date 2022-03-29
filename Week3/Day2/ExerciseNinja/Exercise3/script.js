let inputString = prompt("Please write a sentence with the word Nemo in it");
console.log(inputString);
let stringArray = inputString.split(" ");
console.log(stringArray);
let positNemo = stringArray.indexOf("Nemo");
console.log(positNemo);
if (positNemo >= 0) {
  alert("I found Nemo at word number " + (positNemo + 1));
} else {
  alert("I can't find Nemo");
}
