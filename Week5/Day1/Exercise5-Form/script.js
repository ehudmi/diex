// Exercise 5

const mySelect = document.getElementById("select1");
console.log(mySelect.options[1].value);

function createOption(arg) {
  let newOption = document.createElement("option");
  let newText = document.createTextNode(arg);
  mySelect.appendChild(newOption);
  mySelect.appendChild(newText);
}

createOption("work");
