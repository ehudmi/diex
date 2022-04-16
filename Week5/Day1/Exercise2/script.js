// Exercise 1

let myButton = document.getElementById("jsstyle");
// myButton.onclick = myButton.style.backgroundColor = "red";
myButton.addEventListener("click", respondClick);
function respondClick() {
  myButton.style.backgroundColor = "red";
}
myButton.addEventListener("mouseover", respondMouseOver);
function respondMouseOver() {
  myButton.style.backgroundColor = "blue";
}
myButton.addEventListener("mouseout", respondMouseOut);
function respondMouseOut() {
  myButton.style.backgroundColor = "green";
}
