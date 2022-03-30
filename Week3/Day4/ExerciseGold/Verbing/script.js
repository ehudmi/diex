// Verbing
let inputVerb = prompt(`give me a verb to play with`);

switch (inputVerb.length >= 3 === false) {
  case true:
    console.log(inputVerb);
    break;
  case false:
    switch (inputVerb.endsWith("ing") === true) {
      case true:
        inputVerb = inputVerb.concat(`ly`);
        console.log(inputVerb);
        break;
      case false:
        inputVerb = inputVerb.concat(`ing`);
        console.log(inputVerb);
        break;
    }
}
