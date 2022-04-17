// Exercise 1

// Using a DOM property, retrieve the h1 and console.log it.
console.log(document.querySelector("h1"));

// Using DOM methods, remove the last paragraph in the <article> tag.
const lastParagraph = document.body.querySelector("article").lastElementChild;
lastParagraph.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2 = document.querySelector("h2");
h2.addEventListener("click", function () {
  h2.style.backgroundColor = "red";
});
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.querySelector("h3");
h3.addEventListener("click", function () {
  h3.style.display = "none";
});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
function makeButton() {
  const myButton = document.createElement("button");
  const p = document.querySelectorAll("p");

  function makeBold() {
    for (let i = 0; i < p.length - 1; i++) {
      p[i].style.fontWeight = "bold";
    }
  }
  document.body.appendChild(myButton);
  myButton.textContent = "Click Me";

  myButton.addEventListener("click", makeBold);
}
makeButton();
// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
const h1 = document.querySelector("h1");
h1.addEventListener("mouseover", changeSize);
h1.addEventListener("mouseleave", resetSize);
let defaultSize = h1.style.fontSize;

function changeSize() {
  let size = Math.round(Math.random() * 100);
  h1.style.fontSize = String(size) + "px";
}

function resetSize() {
  h1.style.fontSize = defaultSize;
}

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
h2.addEventListener("mouseover", fadeEffect);
h2.addEventListener("mouseleave", resetEffect);

function fadeEffect() {
  h2.style.opacity = "50%";
  h2.style.transition = "opacity 2 ms";
}

function resetEffect() {
  h2.style.opacity = "100%";
}
