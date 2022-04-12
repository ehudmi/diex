// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: add a new class to each planet).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
// let planet  =  [
//   { name: "Venus", moons: [] },
//   { name: "Earth", moons: ["moon"] },
//   { name: 'Mars', moons: ["Deimos", "Phobos"] },
//   { name: 'Jupiter', moons: ["IO", "Europa", "Ganymede"] },
//   { name: 'Sarturna', moons: ["Ymir", "Paaliaq", "Siarnaq", "Tarvos", "Kiviuq", "Ijiraq", "Thrymr"] },
//   { name: 'Uranus', moons: ["Juliette", "Portia", "Cressida", "Desdémone", "Rosalinde", "Belinda", "Cordélia"] },
//   { name: 'Neptune', moons: ["Despina", "Galatea", "HippoCamp"] }
// ]

const planetSolarSystem = [
  { planet: "Earth", color: "blue", moons: ["1"] },
  { planet: "Jupiter", color: "teal", moons: ["1", "2", "3", "4", "5"] },
  { planet: "Saturn", color: "orange", moons: ["1", "2"] },
  { planet: "Mercury", color: "green", moons: ["1", "2", "3"] },
  { planet: "Mars", color: "red", moons: ["1", "2", "3", "4", "5"] },
  {
    planet: "Neptune",
    color: "yellow",
    moons: ["1", "2", "3", "4", "5", "6", "7"],
  },
  { planet: "Venus", color: "pink", moons: ["1", "2", "3", "4", "5", "6"] },
  { planet: "Uranus", color: "purple", moons: ["1", "2", "3", "4"] },
];

planetSolarSystem.forEach((element) => {
  let planetList = document.querySelector("section");
  let makeDiv = document.createElement("div");
  let moonList = document.createElement("ul");
  makeDiv.classList.add("planet");
  makeDiv.style.backgroundColor = element.color;
  makeDiv.classList.add("color");
  planetList.appendChild(makeDiv);
  makeDiv.appendChild(moonList);
  moonList.style.listStyleType = "none";
  moonList.style.display = "inline-flex";
  for (i = 0; i < element.moons.length; i++) {
    let makeMoons = document.createElement("li");
    makeMoons.classList.add("moon");
    makeMoons.style.position = "inherit";
    moonList.appendChild(makeMoons);
  }
});
