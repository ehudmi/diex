let a = 2 + 2;
// a is defined as 4

switch (a) {
  case 4:
    alert("Right!");
    break;
  // if a is 4 do the alert and end processing
  case 3: // (*) grouped two cases
  case 5:
    alert("Wrong!");
    alert("Why don't you take a math class?");
    break;
  // if a is 3 or 5 do the alert and end processing
  default:
    alert("The result is strange. Really.");
  // if a is undefined or other than 3 or 4 or 5 do the alert and end processing
}
// expected output 'Right'
