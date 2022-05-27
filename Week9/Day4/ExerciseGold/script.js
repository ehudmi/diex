// Exercise 1: Analyze #2
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

// let sequentialStart = async function () {
//   console.log("==SEQUENTIAL START==");
//   const slow = await resolveAfter2Seconds();
//   console.log(slow);
//   const fast = await resolveAfter1Second();
//   console.log(fast);
// };

// sequentialStart();

// Analyze the code provided above before executing it - what will be the outcome?
// Predicted:
// "==SEQUENTIAL START=="
// "starting fast promise"
// "fast"
// "fast promise is done"
// "starting slow promise"
// "slow"
// "slow promise is done"

// Actual:
// ==SEQUENTIAL START==
// script.js:5 starting slow promise
// script.js:9 slow promise is done
// script.js:27 slow
// script.js:15 starting fast promise
// script.js:19 fast promise is done
// script.js:29 fast

// Exercise 2: Analyze #3
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

// let concurrentStart = async function () {
//   console.log("==CONCURRENT START with await==");
//   const slow = resolveAfter2Seconds();
//   const fast = resolveAfter1Second();
//   console.log(await slow);
//   console.log(await fast);
// };

// setTimeout(concurrentStart, 4000);

// Predicted:
// "==CONCURRENT START with await=="    //Starts after 4 seconds
// "starting slow promise"
// "slow promise is done"
// "slow"
// "starting fast promise"
// "fast promise is done"
// "fast"

// Actual:
// ==CONCURRENT START with await==
// script.js:56 starting slow promise
// script.js:66 starting fast promise
// script.js:70 fast promise is done
// script.js:60 slow promise is done
// script.js:79 slow
// script.js:80 fast

// Analyze the code provided above before executing it - what will be the outcome?

// Exercise 3 : Modify Fetch With Async/Await
// Instructions
// Using this code:

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

// const getData = async function () {
//   const [users, posts, albums] = await Promise.all(
//     urls.map((url) => fetch(url).then((resp) => resp.json()))
//   );
//   console.log("users", users);
//   console.log("posta", posts);
//   console.log("albums", albums);
// };

// getData();

const getDataAwait = async function () {
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
};

getDataAwait();

// Modify the function above. Add async await in place of the following line:
// fetch(url).then(resp => resp.json())
// So there shouldn’t be any .then() calls anymore!
// Don’t get discouraged… this is a really tough one…
