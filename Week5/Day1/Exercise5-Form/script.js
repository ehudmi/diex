// Exercise 5

const mySelect = document.getElementById("select1");
console.log(mySelect.options[1].value);

function createOption(arg) {
  let newOption = document.createElement("option");
  let newText = document.createTextNode(arg);
  mySelect.appendChild(newOption);
  mySelect[mySelect.length - 1].appendChild(newText);
}

createOption("Work");

function createFirst(arg) {
  let newOption = document.createElement("option");
  let newText = document.createTextNode(arg);
  mySelect.insertBefore(newOption, mySelect[0]);
  mySelect[0].appendChild(newText);
}

createFirst("Primary School");

mySelect.selectedIndex = 3;

let myButton = document.querySelector("button");
myButton.addEventListener("click", function () {
  alert(mySelect.value);
});
