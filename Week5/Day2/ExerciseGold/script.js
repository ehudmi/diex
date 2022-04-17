// Exercise 1
// Display the value of the selected option.

let mySelect = document.getElementById("genres");
console.log(mySelect.value);

// Add an additional option to the select tag:
// <option value="classic">Classic</option>

let newOption = document.createElement("option");
let optionText = document.createTextNode("Classic");
mySelect.appendChild(newOption);
newOption.appendChild(optionText);
newOption.value = "classic";
console.log(newOption);
// The newly added option should be selected by default.
mySelect.value = newOption.value;

// Exercise 2
// Add a click event listener to the <input type="button">.
// When clicked on, it should call a function named : removecolor()
// that removes the selected color from the dropdown list.

let myForm = document.forms[0];
let myButton = document.querySelector(`input[type="button"]`);
myButton.addEventListener("click", removecolor);

function removecolor() {
  let mySelect = document.getElementById("colorSelect");
  mySelect.remove(mySelect.value);
}
