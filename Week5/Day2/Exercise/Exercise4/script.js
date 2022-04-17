// Exercise 4

const form = document.querySelector("form");
let inputRadius = document.getElementById("radius");
let outputVolume = document.getElementById("volume");
let radius = 0;
let volume = 0;

form.addEventListener("submit", calculateVolume);

inputRadius.addEventListener("change", getRadius);

function getRadius(event) {
  radius = event.target.value;
}

function calculateVolume(e) {
  e.preventDefault();
  volume = (4 / 3) * Math.pow(inputRadius.value, 3) * Math.PI;
  outputVolume.value = volume.toFixed(2);
}
