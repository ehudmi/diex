// Exercise 1 : Change The Navbar

// In the <div> above, change the value of the id attribute from navBar to socialNetworkNavigation,
// using the setAttribute method.
let myNav = document.getElementById("navBar");
myNav.setAttribute("Id", "socialNetworkNavigation");

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).

let newLi = document.createElement("li");

// Create a new text node with “Logout” as its specified text.

let newText = document.createTextNode("Logout");

// Append the text node to the newly created list node (li).

newLi.appendChild(newText);

// Finally, append this updated list node to the unordered list above, using the appendChild method.

let ul = document.querySelector("ul");
ul.appendChild(newLi);

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last
//  li elements from their parent element (ul). Display the text of each link. (Hint: use the textContent property).

console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);

// Exercise 2 : Users

// In the HTML above change the name “Pete” to “Richard”.

let workList = document.getElementsByClassName("list");

workList[0].children[1].textContent = "Richard";

// Change each first name of the two <ul>'s to your name.

for (i = 0; i < workList.length; i++) {
  workList[i].children[0].textContent = "Ehud";
}

// At the end of each <ul> add a <li> that says “Hey students”.
for (i = 0; i < workList.length; i++) {
  let heyItem = document.createElement("li");
  heyItem.appendChild(document.createTextNode("Hey students"));
  workList[i].appendChild(heyItem);
}

// Delete the name Sarah from the second <ul>.

workList[1].removeChild(workList[1].children[1]);

// Bonus
// Add a class called student_list to both of the <ul>'s.

function addStudentList() {
  let newClass = document.createElement("class");
  let newNode = document.createTextNode("student_list");
  newClass.appendChild(newNode);
  for (i = 0; i < workList.length; i++) {
    workList[i].classList.add("student_list");
  }
}

addStudentList();
// Add the classes university and attendance to the first <ul>.
function addMore() {
  let newItems = ["university", "attendance"];
  for (i = 0; i < newItems.length; i++) {
    let newClass = document.createElement("class");
    let newNode = document.createTextNode(newItems[i]);
    newClass.appendChild(newNode);
    workList[0].classList.add(newItems[i]);
  }
}
addMore();
// Exercise 3 : Users And Style

// Add a “light blue” background color and some padding to the <div>.
let lastDiv =
  document.querySelectorAll("div")[document.querySelectorAll("div").length - 1];
lastDiv.style.backgroundColor = "lightblue";
lastDiv.style.padding = "20px";

// Do not display the first name (John) in the list.

let lastUl =
  document.querySelectorAll("ul")[document.querySelectorAll("ul").length - 1];
console.log(lastUl.querySelectorAll("li")[0]);
lastUl.querySelectorAll("li")[0].style.visibility = "hidden";

// Add a border to the second name (Pete).
lastUl.querySelectorAll("li")[1].style.border = "1px solid blue";

// Change the font size of the whole body.

document.body.style.fontSize = "larger";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if ((lastDiv.style.backgroundColor = "lightblue")) {
  console.log(
    `Hello ${lastUl.querySelectorAll("li")[0].textContent} and ${
      lastUl.querySelectorAll("li")[1].textContent
    }`
  );
}
