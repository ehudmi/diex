// Exercise 1

// 1. Get the value of each of the inputs in the HTML file when the button is clicked.
// 2. Make sure the values are not empty
// 3. Write a story that uses each of the values.
// 4. Make sure you check the console for errors when playing the game.
// 5. Bonus: Add a “shuffle” button to the HTML file,
// when clicked the button should change the story currently displayed
// (but keep the values entered by the user). The user could click the button at least
// three times and get a new story. Display the stories randomly.

let madArray = new Array();
let ul = document.querySelector("ul");
let myButton = document.querySelector("button");

myButton.addEventListener("click", makeStory);

function makeStory() {
  let noun = document.getElementById("noun").value;
  let adjective = document.getElementById("adjective").value;
  let person = document.getElementById("person").value;
  let verb = document.getElementById("verb").value;
  let place = document.getElementById("place").value;
  madArray.push([person, verb, "the " + noun, adjective, "in " + place]);
  madArray.push(["the " + noun, adjective, person, verb, "in " + place]);
  madArray.push([person, "the " + noun, adjective, verb, "in " + place]);
  madArray.push(["the " + noun, person, adjective, verb, "in " + place]);
  madArray.push([verb, adjective, person, "the " + noun, "in " + place]);
  madArray.push(["in " + place, "the " + noun, adjective, person, verb]);
  if (
    noun === "" ||
    adjective === "" ||
    person === "" ||
    verb === "" ||
    place === ""
  ) {
    alert("The data is not complete");
  } else {
    // let myStory=document.createElement("textarea")
    let storyText = document.createTextNode(madArray[0].join(" "));
    document.querySelector("span").appendChild(storyText);
  }
}

let shuffle = document.createElement("button");
let shuffleText = document.createTextNode("Shuffle");
document.querySelector("p").appendChild(shuffle);
shuffle.appendChild(shuffleText);

shuffle.addEventListener("click", NewStory);
let counter = 1;

function NewStory() {
  if (counter < 6) {
    let storyText = madArray[counter].join(" ");
    document.querySelector("span").textContent = storyText;
    counter += 1;
  } else {
    alert(`Enough with the games`);
  }
}
