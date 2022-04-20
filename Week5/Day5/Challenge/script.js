// Exercise 1 - JS Basics

// Instructions
// Write a JS program to print the letter A using stars.

// For the first 20min of the Daily Challenge, try to think about the steps and code by yourself.
// After this period of time, if you have some issues, look for help on the internet

// Hint : Use Rows and Columns
// Check out this image to help you:

const letter = [
  [0, 0, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 1, 0],
];

let myTable = document.createElement("table");
document.querySelector("div").appendChild(myTable);

for (i in letter) {
  let newRow = myTable.insertRow(i);
  for (j in letter[i]) {
    let myText = document.createTextNode("");
    let newCell = newRow.insertCell();
    newCell.appendChild(myText);
    if (letter[i][j] == 1) {
      newCell.textContent = "*";
    }
  }
}
