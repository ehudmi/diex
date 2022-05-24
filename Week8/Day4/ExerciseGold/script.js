// Exercise 1 : Giphy API #2
// Instructions
// Part I

// Use the Giphy API Documentation for this exercise. Use the API KEY provided in the Exercises XP.
// Create a program to fetch a gif.
// Once the Giphy API has responded with data, append one random GIF to the page.
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.

let xhr = new XMLHttpRequest();

// Configure my request

xhr.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=donaldduck&limit=1&rating=g&bundle=original&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);

xhr.responseType = "json";

// Send the request

xhr.send();

// What happens after the response is received

xhr.onload = () => {
  if (xhr.status != 200) {
    // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else {
    // show the result
    console.log(xhr.response); // response is the server
  }
};

xhr.onerror = () => {
  alert("Request failed");
};

const myImg = document.createElement("img");
myImg.src =
  "https://media0.giphy.com/media/finuaFKBxfZRF9JOtx/giphy.gif?cid=830e7a841v6v82t22a0mts8d6fjghivcm49vtoxkpfcuenfl&rid=giphy.gif&ct=g";

document.body.appendChild(myImg);
