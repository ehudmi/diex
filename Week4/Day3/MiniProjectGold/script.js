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
