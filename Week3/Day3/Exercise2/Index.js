let a = 2 + 2;
// a is defined as 4

switch (a) {
  case 3:
    alert("Too small");
    break;
  // if a is 3 do the alert and end processing
  case 4:
    alert("Exactly!");
    break;
  // if a is 4 do the alert and end processing
  case 5:
    alert("Too large");
    break;
  // if a is 5 do the alert and end processing
  default:
    alert("I don't know such values");
  // if a is not defined or any other value, besides 3 or 4 or 5 then do the alert and end processing
}
// expected output 'Exactly'
