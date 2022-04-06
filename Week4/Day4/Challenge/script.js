let inputNumber = prompt(`Give me a number to start`);
let i = 1;

function countBottles() {
  do {
    console.log(`${inputNumber} bottles of beer on the wall`);
    console.log(`${inputNumber} bottles of beer`);
    switch (i) {
      case 1:
        console.log(`Take ${i} down, pass it around`);
        break;
      default:
        console.log(`Take ${i} down, pass them around`);
    }
    inputNumber = inputNumber - 1;
    console.log(`${inputNumber} bottles of beer on the wall`);
    i++;
    console.log("");
  } while (inputNumber > 0);
}

countBottles(inputNumber);
