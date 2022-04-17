// Exercise 3

// Create a global variable named allBoldItems.

let allBoldItems = [];

// Create a function called getBold_items() that takes no parameter.
// This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

function getBold_items() {
  const p = document.querySelectorAll("strong");

  for (i = 0; i < p.length; i++) {
    allBoldItems.push(p[i].innerText);
  }
}

getBold_items();

// Create a function called highlight() that changes the color of all the bold text to blue.

function highlight() {
  const p = document.querySelectorAll("strong");
  for (i = 0; i < p.length; i++) {
    p[i].style.color = "blue";
  }
}

// Create a function called return_normal() that changes the color of all the bold text back to black.

function return_normal() {
  const p = document.querySelectorAll("strong");
  for (i = 0; i < p.length; i++) {
    p[i].style.color = "black";
  }
}

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph),

const p = document.querySelector("p");
p.addEventListener("mouseover", highlight);

// and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph).

p.addEventListener("mouseout", return_normal);
