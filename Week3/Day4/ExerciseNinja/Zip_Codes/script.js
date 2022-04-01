// Zip Code
let inputZip = prompt(`what is your zip code?`);

switch (isNaN(Number(inputZip))) {
  case true:
    alert(`this is not a valid zip code`);
    break;
  case false:
    switch ((inputZip.length == 5) === true) {
      case false:
        alert(`this is not a valid zip code`);
        break;
      case true:
        switch (inputZip.trim.length == 5) {
          case false:
            alert(`this is not a valid zip code`);
            break;
          case true:
            alert(`this is an excellent zip code`);
        }
    }
}
