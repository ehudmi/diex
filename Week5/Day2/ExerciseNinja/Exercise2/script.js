// Exercise 2 - Validate The Email

// We will create a form that ask the user for their email.
// Then, using a function we will check the validity of the user’s input.

// Add an input that has a type="email" to your form.

let emailInput = document.createElement("input");
let emailText = document.createTextNode("Email");
document.querySelector("form").appendChild(emailInput);
emailInput.setAttribute("placeholder", "email");
emailInput.appendChild(emailText);

document.getElementById("form1").addEventListener("submit", checkForm);

function checkForm(e) {
  e.preventDefault();
  if (
    emailInput.value.includes("@") &&
    emailInput.value.includes(".") &&
    emailInput.value.indexOf("@") < emailInput.value.indexOf(".")
  ) {
    console.log("email looks legit");
  } else {
    console.log("you need to check the email");
  }
}

// Write your own javascript validation function to check if the entered value is a valid email address.
// The address should contain some valid characters, and the @ sign, more characters then a . (period) and some more characters.
// On “submit”, the validation function should run and validate the email address.
// Try to do this exercise twice : with and without regex.
