// Daily Challenge: Giphy API
// Instructions
// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user
// (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it.
// Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

const myForm = document.forms[0];

// perform find using the input field data

myForm.querySelector("#find").addEventListener("click", (e) => {
  let xhr = new XMLHttpRequest();

  // Configure my request

  let url = "https://api.giphy.com/v1/gifs/search?";
  let search = myForm.querySelector("#search").value;
  let params = "limit=1&rating=g&bundle=fixed_height";
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
      // create the DOM elements after getting the response

      let myDiv = document.querySelector("div");
      let myImg = document.createElement("img");
      let delBttn = document.createElement("input");
      delBttn.type = "button";
      delBttn.id = "delete";
      delBttn.value = "Delete Image";
      myImg.src = xhr.response.data[0].images.original.url;
      myDiv.appendChild(myImg);
      myDiv.appendChild(delBttn);

      // Add the event listener to delete the retrieved image and button

      delBttn.addEventListener("click", (e) => {
        e.target.previousElementSibling.remove();
        e.target.remove();
      });
    }
  };

  xhr.onerror = () => {
    alert("Request failed");
  };
});
