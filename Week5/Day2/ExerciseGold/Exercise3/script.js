// Exercise 3

// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field,
// then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

let shoppingList = [];
let myForm = document.createElement("form");
document.querySelector("div").appendChild(myForm);
let myInput = document.createElement("input");
myForm.appendChild(myInput);
let addButton = document.createElement("button");
let addButtonText = document.createTextNode("Add Item");
myForm.appendChild(addButton);
addButton.appendChild(addButtonText);

addButton.addEventListener("click", addItem);

function addItem(e) {
  e.preventDefault();
  let currentItem = document.querySelector("input");
  console.log(currentItem);
  if (currentItem === "") {
    alert("Please write what you need");
  } else {
    shoppingList.push(currentItem.value);
  }
}

let clearButton = document.createElement("button");
let clearButtonText = document.createTextNode("Clear All");
myForm.appendChild(clearButton);
clearButton.appendChild(clearButtonText);

clearButton.addEventListener("click", clearAll);

function clearAll() {
  shoppingList = [];
}
