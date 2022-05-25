// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
// Test:

const compareToTen = (num) => {
  new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve("argument is less than 10");
    }
    reject("argument is more than 10");
  })
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

compareToTen(8);

compareToTen(15);

// //In the example, the promise should reject
// compareToTen(15)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

const checkSuccess = new Promise(() => {
  setTimeout(() => {
    return Promise.resolve(console.log("success"));
  }, 4000);
}).catch((error) => console.log("Ooops something went wrong", error));

// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const resolvedPromise = Promise.resolve(3).then((result) =>
  console.log(result)
);

const rejectedPromise = Promise.reject("Boo!").catch((error) =>
  console.log("That's my error", error)
);

// Exercise 4: Quizz - Not Mandatory
// Follow this tutorial and do the quizz until the page called “a few tricks with promises”.
