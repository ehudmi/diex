// Exercise 4

function getvalue() {
  const myForm = document.getElementById("form1");
  let firstName = myForm.querySelector(`input[name="fname"]`).value;
  let lastName = myForm.querySelector(`input[name="lname"]`).value;
  return `${firstName} ${lastName}`;
}
console.log(getvalue());
