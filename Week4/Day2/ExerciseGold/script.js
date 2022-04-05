// Exercise 1 - is_blank

// function is_Blank(newString) {
//   if (newString === "") {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(is_Blank(prompt(`Give me a string`)));

// Exercise 2 - Abbrev_name

// function abbrevName(longString) {
//   //   longString = prompt("Give me a string");
//   if (isNan(longString)) {
//   }
// }

// Exercise 3 - SwapCase

function SwapCase(myString) {
  let tempString = "";
  for (i = 0; i < myString.length; i++) {
    if (myString.charAt(i) === myString.charAt(i).toUpperCase()) {
      tempString = tempString + myString.charAt(i).toLowerCase();
    } else if (myString.charAt(i) === myString.charAt(i).toLowerCase()) {
      tempString = tempString + myString.charAt(i).toUpperCase();
    } else {
      tempString = tempString;
    }
  }
  console.log(tempString);
}

SwapCase(prompt(`Give me a string`));

// Exercise 4 - Omnipresent Value

function omniCheck(myArray) {
  for (let i in myArray) {
  }
}
