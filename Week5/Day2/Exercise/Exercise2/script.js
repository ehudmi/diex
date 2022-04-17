// Exercise 2

// Retrieve the form and console.log it.

const myForm = document.forms[0];
console.log(myForm);

// Retrieve the inputs by their id and console.log them.

const fName = myForm.querySelector(`input[id="fname"]`);
console.log(fName);

const lName = myForm.querySelector(`input[id="lname"]`);
console.log(lName);

// Retrieve the inputs by their name attribute and console.log them.

const fName1 = myForm.querySelector(`input[name="fname"]`);
console.log(fName1);

const lName1 = myForm.querySelector(`input[name="lname"]`);
console.log(lName1);

// When the user submits the form (ie. submit event listener)
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

myForm.addEventListener("submit", addUserAnswer);

function addUserAnswer(e) {
  e.preventDefault();
  const fName = myForm.querySelector(`input[id="fname"]`).value;
  const lName = myForm.querySelector(`input[id="lname"]`).value;
  console.log(fName + " " + lName);

  if (fName == "" || lName == "") {
    alert("It's not valid");
  } else {
    console.log(fName + " " + lName);
    addLi(fName);
    addLi(lName);
  }
  function addLi(arg) {
    let li = document.createElement("li");
    let ul = document.querySelector("ul");
    let newText = document.createTextNode(arg);
    ul.appendChild(li);
    li.appendChild(newText);
  }
}
