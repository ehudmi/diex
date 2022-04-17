// Exercise 3 - Get The User’s Geolocation Coordinates

let myButton = document.createElement("button");
let buttonText = document.createTextNode("Get Location");
let geoDisplay = document.createElement("input");
document.body.insertBefore(myButton, document.querySelector("script"));
myButton.appendChild(buttonText);

myButton.addEventListener("click", getGeo);

function getGeo() {
  let geoDisplay = document.createElement("input");
  document.body.insertBefore(geoDisplay, document.querySelector("script"));
  geoDisplay.style.width = "250px";
  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {
    geoDisplay.value =
      "Latitude: " +
      position.coords.latitude +
      " Longitude: " +
      position.coords.longitude;
  }
}
