// Exercise 3 - Get The User’s Geolocation Coordinates

let myButton = document.createElement("button");
let buttonText = document.createTextNode("Get Location");
document.body.insertBefore(myButton, document.querySelector("script"));
myButton.appendChild(buttonText);

myButton.addEventListener("click", getGeo);

function getGeo() {
  navigator.geolocation.getCurrentPosition(showPosition);
  function showPosition(position) {
    document.body.textContent =
      "Latitude: " +
      position.coords.latitude +
      " Longitude: " +
      position.coords.longitude;
  }
}
