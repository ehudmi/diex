// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.

let inputNumber = prompt("Test my skill Big Boy! - Input a number");
if (Number(inputNumber) < 2) {
  alert("boom");
} else if (Number(inputNumber) % 5 == 0 && Number(inputNumber) % 2 == 0) {
  alert("BOOM!");
} else if (Number(inputNumber) % 2 == 0) {
  alert("boom!");
} else if (Number(inputNumber) % 5 == 0) {
  alert("BOOM");
} else if (Number(inputNumber) > 2) {
  alert("o".repeat(inputNumber));
} else {
  alert("Sorry...You have to stay at home tonight");
}
