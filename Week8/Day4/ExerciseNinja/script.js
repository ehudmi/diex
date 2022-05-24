// Exercise 1 : Giphy API #3
// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// Create a program to fetch gifs.
// Create an input and a button, which will allow the user to search for a specific type/category of gif.
// Append the relevant gifs to the page. Hint : to find the URL of the gif,
// look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to remove all of the GIFs by clicking a delete button

const myForm = document.forms[0];

// perform find using the input field data

myForm.querySelector("#find").addEventListener("click", (e) => {
  let xhr = new XMLHttpRequest();

  // Configure my request

  let url = "https://api.giphy.com/v1/gifs/search?";
  let search = myForm.querySelector("#search").value;
  let params = "rating=g&bundle=fixed_height";
  let api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

  xhr.open("GET", `${url}&q=${search}&${params}&api_key=${api_key}`);

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
      for (i in xhr.response.data) {
        let myImg = document.createElement("img");
        myImg.src = xhr.response.data[i].images.original.url;
        document.body.appendChild(myImg);
      }
    }
  };

  xhr.onerror = () => {
    alert("Request failed");
  };
});

// Clear all Giphs

myForm.querySelector("#clear").addEventListener("click", (e) => {
  document
    .querySelectorAll("img")
    .forEach((elem) => elem.parentNode.removeChild(elem));
});
