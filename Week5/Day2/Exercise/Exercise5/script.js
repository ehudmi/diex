// Exercise 5

const h2 = document.querySelector("h2");

h2.addEventListener("click", function () {
  h2.style.backgroundColor = "red";
});

h2.addEventListener("mouseover", changeSize);
h2.addEventListener("mouseleave", resetSize);
h2.addEventListener("mouseout", fadeEffect);
h2.addEventListener("mousemove", resetEffect);

function fadeEffect() {
  h2.style.opacity = "50%";
  h2.style.transition = "opacity 2 ms";
}

function resetEffect() {
  h2.style.opacity = "100%";
}

let defaultSize = h2.style.fontSize;

function changeSize() {
  let size = Math.round(Math.random() * 100);
  h2.style.fontSize = String(size) + "px";
}

function resetSize() {
  h2.style.fontSize = defaultSize;
}
