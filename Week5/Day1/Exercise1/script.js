// Exercise 1

let clickCounter = 3;

function insertRow() {
  let table = document.querySelector("table");
  let newRow = table.insertRow();
  for (i = 1; i < 3; i++) {
    let cellText = document.createTextNode(`Row${clickCounter} cell${i}`);
    let newCell = newRow.insertCell();
    newCell.appendChild(cellText);
  }
  return (clickCounter += 1);
}
