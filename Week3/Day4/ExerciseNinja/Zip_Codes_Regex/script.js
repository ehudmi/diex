// Zip Code
let inputZip = prompt(`what is your zip code?`);
let pattern = /\d{5}/g;

console.log(pattern.test(inputZip));

if (pattern.test(inputZip) === true) {
  alert(`this is an excellent zip code`);
} else {
  alert(`this is not a valid zip code`);
}

// const regex = /^([0-9]{5})$/gm;
