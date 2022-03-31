// Zip Code
let inputZip = prompt(`what is your zip code?`);
switch ((inputZip.length == 5) === true) {
  case false:
    alert(`this is not a valid zip code`);
    break;
  case true:
    switch (inputZip.indexOf(" ") >= 0 === true) {
      case false:
        alert(`this is not a valid zip code`);
        break;
      case true:
        switch ((inputZip.length == 5) === true) {
        }
    }
}
