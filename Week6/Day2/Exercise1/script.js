// Exercise 1 : Scope

// Instructions
// Analyze the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.

// #1
function q1() {
  var a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(a);
}

//Prediction - 3
// run in the console:
q1();

//#2
var a = 0;
function q2() {
  a = 5;
}

function q22() {
  alert(a);
}

//Prediction - q22 - 0, q2 - 5, q22 - 5
// run in the console:
q22();
q2();
q22();

//#3
function q3() {
  window.a = "hello";
}

function q32() {
  alert(a);
}

//Prediction - q3 - "hello", q32 - does nothing
// run in the console:
q3();
q32();

//#4
var a = 1;
function q4() {
  var a = "test";
  alert(a);
}

//Prediction - q4 - "test"
// run in the console:
q4();

//#5
var a = 2;
if (true) {
  var a = 5;
  alert(a);
}
alert(a);

//Prediction - 5 and then 5
