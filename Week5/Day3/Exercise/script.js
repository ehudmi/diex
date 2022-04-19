// Exercise 1

// Create a new HTML file

// Create a banner saying "The sales end in 10min ! " . Style the banner and make it visible to the user after 5 sec.
const myBanner = document.querySelector("h1");
myBanner.style.visibility = "hidden";

window.setTimeout(function () {
  myBanner.style.visibility = "visible";
}, 5000);

// Exercise 2

// Use the same code as before but create a countdown in the banner.

// ... "The sales end in 10sec ! "

// ... "The sales end in 9sec ! "

// etc ... until 0

const countDown = document.getElementById("countdown");
const CountItDown = () => {
  let currentTime = parseFloat(countDown.textContent);
  if (currentTime > 0) {
    countDown.textContent = currentTime - 1;
  } else {
    window.clearInterval(counter);
  }
};
let counter = window.setInterval(CountItDown, 1000);
