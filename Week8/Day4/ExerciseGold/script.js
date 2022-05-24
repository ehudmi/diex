// Exercise 1 : Recreate the last example by using another URL :

// https://api.chucknorris.io/jokes/random?category={category}

// It retrieves a random chuck norris joke from a given category.

// Look at the API Chuck Norris Documentation : https://api.chucknorris.io/

// Create the new XMLHttpRequest

let xhr = new XMLHttpRequest();

// Configure my request

xhr.open("GET", "https://api.chucknorris.io/jokes/random?category{animal}");

// Send the request

xhr.send();

// What happens after the response is received

xhr.onload = () => {
  if (xhr.status != 200) {
    // analyze HTTP status of the response
    alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else {
    // show the result
    console.log(`Done ${xhr.response}`); // response is the server
  }
};

xhr.onerror = () => {
  alert("Request failed");
};
