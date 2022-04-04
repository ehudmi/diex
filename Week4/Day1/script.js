// Exercise 1

function calcAge(myAge) {
  console.log(`My mum is ${myAge * 2} and my dad is ${myAge * 2 * 1.2}`);
}

calcAge(prompt(`How old are you?`));

// Exercise 2

function calcMumAge(myAge) {
  return myAge * 2;
}

console.log(calcMumAge(prompt(`How old are you?`)));

// Exercise 3
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function () {
    alert("You agreed.");
  },
  function () {
    alert("You canceled the execution.");
  }
);
