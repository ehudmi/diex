// Exercise 1 - Coloring Game

// https://devtlv.github.io/coloring_squares/
// Select a color
// Draw what you want

// Project Brief
// Welcome to Coloring Squares.

// Your task is to build a coloring game similar to the working project above.

// You will need to use HTML, CSS and JS to accomplish this task.

// A Few Things To Think About…
// HTML, CSS:

// How will you make the grid of colors?
// How will you make the grid of blank squares?
// Hint… GRID :P
// JS:

// How does a user choose a color?
// How does drawing work? How can you tell when the user is clicking and dragging?
// Hint, look at the JS events mousedown, mouseup, and mouseover.

const colors = [
  "#FF0000",
  "#FF4500",
  "#FFA500",
  "#FFFF00",
  "#9ACD32",
  "#90EE90",
  "#008000",
  "#40E0D0",
  "#00FFFF",
  "#87CEFA",
  "#1E90FF",
  "#0000FF",
  "#00008B",
  "#4B0082",
  "#8B008B",
  "#EE82EE",
  "#FFB6C1",
  "#D3D3D3",
  "#808080",
  "#000000",
  "#FFFFFF",
];

for (let i in colors) {
  let addColor = document.createElement("div");
  let palette = document.querySelector(".palette-grid");
  let paletteColor = palette.appendChild(addColor);
  paletteColor.className = "palette-item";
  paletteColor.style.backgroundColor = colors[i];
}

for (h = 0; h < 24; h++) {
  for (let j = 0; j < 60; j++) {
    let addCanvasItem = document.createElement("div");
    let canvas = document.querySelector(".canvas-grid");
    let canvasItem = canvas.appendChild(addCanvasItem);
    canvasItem.className = "canvas-item";
  }
}

let currentColor = "";
document.querySelectorAll(".palette-item").forEach((item) =>
  item.addEventListener("click", () => {
    currentColor = item.getAttribute("style");
  })
);

document.querySelectorAll(".canvas-item").forEach((item) => {
  item.addEventListener("mouseover", function (e) {
    if (e.buttons == 1 || e.buttons == 3) {
      item.setAttribute("style", currentColor);
    }
  });
});

document.querySelector("button").addEventListener("click", () =>
  document.querySelectorAll(".canvas-item").forEach((item) => {
    item.setAttribute("style", "background-color: rgb(255, 255, 255)");
  })
);
