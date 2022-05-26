// Exercise 1 : Star Wars API
// Instructions
// Part I

// Using this code:

const urls = [
  "https://www.swapi.tech/api/people/1",
  "https://www.swapi.tech/api/people/2",
  "https://www.swapi.tech/api/people/3",
  "https://www.swapi.tech/api/people/4",
];

Promise.all(urls.map((elem) => fetch(elem)))
  .then((responses) =>
    responses.forEach((response) =>
      console.log(`${response.url}: ${response.status}`)
    )
  )
  .catch((error) => console.log("Star Wars went Kabooee", error));

// Use Promise.all to fetch all the characters from the array above with only one request.
// Console.log the output and make sure it has a catch block as well.

// Part II

// Change one of the urls in the array provided above. This should cause an error. Make sure your catch block works.
