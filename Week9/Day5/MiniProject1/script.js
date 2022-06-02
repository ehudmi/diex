// Star Wars Web App Using AJAX API
// What You Will Create
// Star Wars Web App Using AJAX API
// In this project you will have to build a single page application that uses AJAX to retrieve information
// and display it on your website as follows:
// Instructions

// You should use this API: https://www.swapi.tech/ to get the data and update it “randomly” in your website by clicking a button.
// Note: The API contains 83 different characters

// 1. Create your HTML file, and add the relevant elements.

// 2. In your JS file, create your functions :
//    to retrieve the elements from the DOM.
//    to get the data from the API (star wars characters).
//    to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

// 3. Display the data using AJAX. Make sure to display a loading message as follows:
//    You can use any of these animation icons for the loading message.

// 4. If there is an error getting the data, display a message as follows:

// 5. You can use your own css to style the website as you see fit

// https://www.swapi.tech/api/people/1

const apiUrl = "https://www.swapi.tech/api/people";

const getCharacter = async () => {
  document.forms[0].style.visibility = "hidden";
  document.querySelector(".spinner-container").style.visibility = "visible";
  let charNumber = Math.floor(Math.random() * 83);
  let fetchURL = `${apiUrl}/${charNumber}`;
  let res = await fetch(fetchURL);
  let resJson = await res.json();
  let charName = resJson.result.properties.name;
  let charHeight = resJson.result.properties.height;
  let charGender = resJson.result.properties.gender;
  let charBirth = resJson.result.properties.birth_year;
  let charHomeUrl = resJson.result.properties.homeworld;
  let charHome = "";
  let planetRes = await fetch(charHomeUrl);
  let planetResJson = await planetRes.json();
  charHome = planetResJson.result.properties.name;
  document.querySelector("#name").value = charName;
  document.querySelector("#height").value = `${charHeight} cm`;
  document.querySelector("#gender").value = charGender;
  document.querySelector("#birth").value = charBirth;
  document.querySelector("#homeworld").value = charHome;
  document.querySelector(".spinner-container").style.visibility = "hidden";
  document.forms[0].style.visibility = "visible";
  return resJson;
};

window.addEventListener("load", getCharacter);
document.querySelector("#search").addEventListener("click", getCharacter);
