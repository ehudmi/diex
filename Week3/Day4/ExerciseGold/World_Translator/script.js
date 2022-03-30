// Word Translator
let inputLanguage = prompt(`what is your language?`).toLowerCase();

switch (inputLanguage) {
  case "french":
    alert("Bonjour");
    break;
  case "english":
    alert(`Hello`);
    break;
  case "hebrew":
    alert(`Shalom`);
    break;
  default:
    alert(`01110011 01101111 01110010 01110010 01111001`);
}
