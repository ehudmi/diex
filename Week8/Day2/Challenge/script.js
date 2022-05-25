// Daily Challenge : HTML Form

// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, send the data as JSON.
// The output should be:JSON.stringify(myForm)
// output

const myForm = document.forms[0];
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(JSON.stringify(Object.fromEntries(formData)));
});
