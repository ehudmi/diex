// Calculator
//
// Today we will be creating a fully functional calculator. In order to do this, we must have our HTML and Javascript files interact with each other.
// We will be using Javascript to dynamically calculate the outcome of the buttons that were clicked on the HTML.
// We will be adding an attribute called onclick to each button. The onclick attribute allows us to call a function from our Javascript file when the button is clicked.
// For example, if you click on the number 2 on the calculator (ie. seen below in the assets), the function number(2) will be called. The argument is the value of the button.

// Use HTML CSS for the visual.

// Create a HTML file for your calculator and a JS file for the calculator’s functionality.
// You must create 3 functions in the js file:
// number(num)
// operator(operator)
// equal()
// Hint : you can use the eval() method to help with your calculations.
// Before coding, take your time to understand all the parts to the exercise and their process. You can write it down somewhere if it helps (recommended).
// Bonus : create the RESET and CLEAR buttons.

// function number(bttnValue) {
//   document.getElementById("calc_display").value = bttnValue;
// }
// number(3);

let numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let opArray = ["+", "-", "*", "/", "=", "."];
let displayValue = "";

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    displayValue = button.value;

    console.log(displayValue);
  });
});

function number() {
  // document.getElementById(`number${}`).value = 3;
  // console.log(this.value());
  // document.getElementById("calc_display").value = 3;
}
// number(document.getElementById(`bttn_number_${}`));
// number();
