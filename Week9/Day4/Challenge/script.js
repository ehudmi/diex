// 1st Challenge
// Instructions
// Implement a simple version of Promise.all.
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Example

// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "foo");
// });

const promiseArray = [promise1, promise2, promise3];

const resolvePromise = () =>
  Promise.all(promiseArray)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

resolvePromise();

// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()

// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

const myForm = document.forms[0];

// collect the data on form submit

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the values into an object

  const formData = new FormData(e.target);
  const locData = Object.fromEntries(formData);

  // Configure my request

  const urls = [];

  let myUrl = "https://api.sunrise-sunset.org/json?";
  let params1 = `lat=${locData.first_city_lat}&lng=${locData.first_city_long}`;
  let params2 = `lat=${locData.second_city_lat}&lng=${locData.second_city_long}`;

  urls.push(myUrl + params1, myUrl + params2);

  // create the async function to get the data

  const getDataAwait = async function () {
    try {
      const [sunrise1, sunrise2] = await Promise.all(
        urls.map(async (url) => {
          let res = await fetch(url);
          let resJson = await res.json();
          return resJson;
        })
      );
      let sunrise1Box = document.createElement("div");
      let sunrise1Text = document.createTextNode(
        `First location sunrise time is ${sunrise1.results.sunrise}`
      );
      document.querySelector("div").appendChild(sunrise1Box);
      sunrise1Box.appendChild(sunrise1Text);
      let sunrise2Box = document.createElement("div");
      let sunrise2Text = document.createTextNode(
        `Second location sunrise time is ${sunrise2.results.sunrise}`
      );
      document.querySelector("div").appendChild(sunrise2Box);
      sunrise2Box.appendChild(sunrise2Text);
    } catch (err) {
      console.log("ooooooops", err);
    }
  };

  getDataAwait();
});
