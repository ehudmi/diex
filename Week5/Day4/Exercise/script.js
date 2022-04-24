// Exercise 1 - Move The Box

// Move the box from left to right
// Tip: use setInterval

function myMove() {
  let motion = null;
  const redBox = document.querySelector("#animate");
  let position = 0;
  clearInterval(motion);
  motion = setInterval(frame, 5);
  function frame() {
    if (position == 350) {
      clearInterval(motion);
    } else {
      position++;
      redBox.style.top = position + "px";
      redBox.style.left = position + "px";
    }
  }
}

// Exercise 2 - Drag & Drop

// Create a draggable square/box element in your HTML file.
// In your javascript file add the functionality which will allow you to drag the square/box and drop it into a larger box.
const dragBox = document.querySelector("#exercise2small");
const dropZone = document.querySelector("#exercise2");
dragBox.setAttribute("draggable", true);
dragBox.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", dragBox.id);
});
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const dragId = e.dataTransfer.getData("text/plain");
  console.log(dragId);
  dropZone.appendChild(dragBox);
});
