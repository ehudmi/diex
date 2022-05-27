// Exercise 1: Async Await & Try/Catch
// Instructions
// Add a try catch block to “Exercise XP Gold” in order to catch any errors.
// To test the catch, modify one of the urls. The catch should console.log ‘ooooooops’.
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getDataAwait = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map(async (url) => {
        let res = await fetch(url);
        let resJson = await res.json();
        return resJson;
      })
    );
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (err) {
    console.log("ooooooops");
  }
};

getDataAwait();

// Exercise 2 : Analyze #4
// Instructions

// let resolveAfter2Seconds = function () {
//   console.log("starting slow promise");
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("slow");
//       console.log("slow promise is done");
//     }, 2000);
//   });
// };

// let resolveAfter1Second = function () {
//   console.log("starting fast promise");
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("fast");
//       console.log("fast promise is done");
//     }, 1000);
//   });
// };

//The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

// let concurrentPromise = function () {
//   console.log("==CONCURRENT START with Promise.all==");
//   return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
//     (messages) => {
//       console.log(messages[0]);
//       console.log(messages[1]);
//     }
//   );
// };

// setTimeout(concurrentPromise, 1000);

// Analyze the code provided above what will be the outcome?
// Predicted:
// "==CONCURRENT START with Promise.all=="
// "starting slow promise"
// "slow promise is done"
// "slow"
// "starting fast promise"
// "fast promise is done"
// "fast"

// Actual:
// ==CONCURRENT START with Promise.all==
// script.js:34 starting slow promise
// script.js:44 starting fast promise
// script.js:48 fast promise is done
// script.js:38 slow promise is done
// script.js:59 slow
// script.js:60 fast

// Exercise 3 : Analyze #5
// Instructions

// let resolveAfter2Seconds = function () {
//   console.log("starting slow promise");
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("slow");
//       console.log("slow promise is done");
//     }, 2000);
//   });
// };

// let resolveAfter1Second = function () {
//   console.log("starting fast promise");
//   return new Promise((resolve) => {
//     setTimeout(function () {
//       resolve("fast");
//       console.log("fast promise is done");
//     }, 1000);
//   });
// };

// let parallel = async function () {
//   console.log("==PARALLEL with await Promise.all==");
//   // Start 2 "jobs" in parallel and wait for both of them to complete
//   await Promise.all([
//     (async () => console.log(await resolveAfter2Seconds()))(),
//     (async () => console.log(await resolveAfter1Second()))(),
//   ]);
// };

// setTimeout(parallel, 5000);

// Analyze the code provided above what will be the outcome?
// Predicted:
// "==PARALLEL with await Promise.all==" //After 5 seconds
// "starting slow promise"
// "starting fast promise"
// "fast promise is done"
// "fast"
// "slow promise is done"
// "slow"

// Actual: Same as predicted (finally)

// Exercise 4 : Analyze #6
// Instructions

let resolveAfter2Seconds = function () {
  console.log("starting slow promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("slow");
      console.log("slow promise is done");
    }, 2000);
  });
};

let resolveAfter1Second = function () {
  console.log("starting fast promise");
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("fast");
      console.log("fast promise is done");
    }, 1000);
  });
};

// This function does not handle errors. See warning below!

let parallelPromise = function () {
  console.log("==PARALLEL with Promise.then==");
  resolveAfter2Seconds().then((message) => console.log(message));
  resolveAfter1Second().then((message) => console.log(message));
};

setTimeout(parallelPromise, 13000);

// Analyze the code provided above what will be the outcome?
// Predicted:
// "==PARALLEL with Promise.then==" // After 13 seconds
// "starting slow promise"
// "starting fast promise"
// "fast promise is done"
// "fast"
// "slow promise is done"
// "slow"

// Actual: Same as predicted (finally)
