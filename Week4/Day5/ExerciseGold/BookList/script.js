// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

const allBooks = [
  {
    title: "The Foundation",
    author: "Isaac Asimov",
    image: "url(./assets/asimov-foundation.jpg)",
    alreadyRead: false,
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    image: "url(./assets/Dune-by-Frank-Herbert-621x1024.jpg)",
    alreadyRead: false,
  },
];

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

let makeTable = document.createElement("table");
document.querySelector("div").appendChild(makeTable);
let bookTable = document.querySelector("table");
let newRow = bookTable.insertRow();
let arrayBooks = [];

for (i = 0; i < allBooks.length; i++) {
  console.log(arrayBooks);
  if (i === 0) {
    newRow = bookTable.insertRow(i);
    arrayBooks = Object.keys(allBooks[i]);
    addCells();
    newRow = bookTable.insertRow(i + 1);
    arrayBooks = Object.values(allBooks[i]);
    addCells();
  } else {
    newRow = bookTable.insertRow(i + 1);
    arrayBooks = Object.values(allBooks[i]);
    addCells();
  }
}

function addCells() {
  arrayBooks.forEach((element) => {
    let newText = document.createTextNode(element);
    let newCell = newRow.insertCell();
    newCell.appendChild(newText);
  });
}
