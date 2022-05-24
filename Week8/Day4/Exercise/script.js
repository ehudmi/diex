// Exercise 1 : Giphy API
// Instructions
// With your knewly accumulated knowledge of AJAX lets write some cool code!

// You will work with this part of the documention

// You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Explanation of the Gif URL and the queries

// q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

// rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

// api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// Create a program to retrieve the data from the API URL provided above.
// Use XMLHttpRequest object to make an AJAX request to the Giphy API and console.log the Javascript Object.
// Output Example:

let xhr = new XMLHttpRequest();

// Configure my request

xhr.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);

xhr.responseType = "json";

// Send the request

xhr.send();

// What happens after the response is received

xhr.onload = () => {
  if (xhr.status != 200) {
    // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else {
    // show the result
    console.log(xhr.response); // response is the server
  }
};

xhr.onerror = () => {
  alert("Request failed");
};

// Exercise 2 : Giphy API
// Instructions
// Using this part of the documention, retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Console.log the Javascript Object

let xhr1 = new XMLHttpRequest();

xhr1.open(
  "GET",
  "https://api.giphy.com/v1/gifs/search?q=sun&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
);

xhr1.responseType = "json";

// Send the request

xhr1.send();

// What happens after the response is received

xhr1.onload = () => {
  if (xhr1.status != 200) {
    // analyze HTTP status of the response
    alert(`Error ${xhr1.status}: ${xhr1.statusText}`); // e.g. 404: Not Found
  } else {
    // show the result
    console.log(xhr1.response); // response is the server
  }
};

xhr1.onerror = () => {
  alert("Request failed");
};
