// Mini Project : Weather App
// What You Will Learn
// Work with an API
// Perform an AJAX request

// What You Will Create
// Build a Weather App

// This project is going to teach you how to build a weather application with JS, HTML, and CSS.
// You will use the openweathermap API for fetching weather information,
// which is a great opportunity for you to learn how to interact with APIs, another great thing you can do with javascript.
// Instructions
// What is OpenWeather?

// In our case, we’re going to use OpenWeatherMap, one of the most popular free choices.
// OpenWeather describes itself as a group of IT experts and data scientists that does deep weather data science since 2014.
// For each point on Earth, OpenWeather provides reliable historical, current and forecasted weather data via light-speed APIs.

// You are going to use the OpenWeatherMap API, with this API Key: 6bc236fa8bd5e7e03f83fd8cea3eac74.

// Part I - Weather App
// Create an HTML, CSS and JS file.

// Add a form in the HTML file to allow the user to type in a city.
// As soon as he clicks on the “Submit” button. You should retrieve the city,
// then retrieve the city information from the API and finally display the result in a nice card, like the example above.
// Use the Current Weather Data to get the information about a specific city.

// If the user enters a correct city, you should display in the card:
// the name of the city, and the name of the country where the city is located
// the weather (ie. “clear”, “sunny” ect…)
// the icon of the weather. Check out this part of the documentation
// the temperature (Temperature in Kelvin is used by default), the humidity

// Warn the user, if he didn’t enter a correct city

// Either way, as soon as the user submits his answer, reset the form input (ie. make it empty).

// in the JS file, the information about each city needs to be saved, in order to display all the previous searches.
// How should you save the information ? Which data type should you use ?

// Part II - Weather App Improved
// Add a button at the end of the HTML, that displays the temperature in another unit :
// Fahrenheit or Celsius. How should you change the API request ?

// 2. Display the wind info, the sunrise and sunset time in the city.

// 3. Make the website responsive

// Part III - Bonus
// Retrieve by default the user’s location (latitute and longitude), and display the location’s weather.

// Add an Error popup if the searched city could not be found.

// Add a “X” next to each card, in order to delete it from the DOM.

const myForm = document.forms[0];

myForm.querySelector("#find").addEventListener("click", (e) => {
  let xhr = new XMLHttpRequest();

  // Configure my request

  let city = myForm.querySelector("#city").value;
  const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";
  const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;
  const iconURL = `http://openweathermap.org/img/wn/`;

  xhr.open("GET", apiURL);

  xhr.responseType = "json";

  // Send the request

  xhr.send();

  // What happens after the response is received

  xhr.onload = () => {
    if (xhr.status != 200) {
      // analyze HTTP status of the response
      // alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      let errorModal = document.querySelector("#error_modal");

      console.log(errorModal);
    } else {
      const dataObject = {
        city: "",
        country: "",
        weather: "",
        humidity: "",
        temperature_celsius: "",
        temperature_fahrenheit: "",
        weather_icon: "",
        wind: { deg: "", gust: "", speed: "" },
        sunrise: "",
        sunset: "",
      };
      let weatherIcon = xhr.response.weather[0].icon;
      dataObject.city = xhr.response.name;
      dataObject.weather_icon = `${iconURL}${weatherIcon}@2x.png`;
      dataObject.country = xhr.response.sys.country;
      dataObject.weather = xhr.response.weather[0].description;
      dataObject.humidity = xhr.response.main.humidity;
      dataObject.temperature_celsius = xhr.response.main.temp;
      dataObject.temperature_fahrenheit =
        (dataObject.temperature_celsius * 9) / 5 + 32;
      dataObject.sunrise = xhr.response.sys.sunrise;
      dataObject.sunset = xhr.response.sys.sunset;
      dataObject.wind = xhr.response.wind;
      console.log(dataObject);
      console.log(xhr.response);

      // create the DOM elements after getting the response

      let containerDiv = document.querySelector(".row");
      let colDiv = containerDiv.appendChild(document.createElement("div"));
      colDiv.classList.add("col");
      let h100Div = colDiv.appendChild(document.createElement("div"));
      h100Div.classList.add("card", "h-100");
      let cardBodyDiv = h100Div.appendChild(document.createElement("div"));
      cardBodyDiv.classList.add("card-body");
      let cardTitle = cardBodyDiv.appendChild(document.createElement("h5"));
      cardTitle.classList.add("card-title");
      let cardTitleText = document.createTextNode(
        `${dataObject.city} , ${dataObject.country}`
      );
      cardTitle.appendChild(cardTitleText);
      let cardTemp = cardBodyDiv.appendChild(document.createElement("h2"));
      cardTemp.classList.add("card-temp");
      let cardTempText = document.createTextNode(
        `${dataObject.temperature_celsius} , °C`
      );
      cardTemp.appendChild(cardTempText);
      let imgIcon = document.createElement("img");
      imgIcon.src = dataObject.weather_icon;
      imgIcon.alt = dataObject.weather;
      // imgIcon.classList.add("card-img-top");
      cardBodyDiv.appendChild(imgIcon);
      let otherItems = document.createElement("p");
      let otherItemsText = document.createTextNode(`
      weather: ${dataObject.weather}
      humidity: ${dataObject.humidity}
      wind - degree: ${dataObject.wind.deg} , gust - ${dataObject.wind.gust} , speed - ${dataObject.wind.speed}
      sunrise time: ${dataObject.sunrise}
      sunrise time: ${dataObject.sunset}`);
      cardBodyDiv.appendChild(otherItems);
      otherItems.appendChild(otherItemsText);
      let delBttn = document.createElement("button");
      delBttn.id = "delete";
      delBttn.innerText = "X";
      h100Div.appendChild(delBttn);
      delBttn.classList.add("btn", "btn-primary");

      // // Add the event listener to delete the retrieved image and button

      delBttn.addEventListener("click", (e) => {
        e.target.parentElement.parentElement.remove();
        e.target.remove();
      });
    }
  };

  // xhr.onerror = () => {
  //   alert("Request failed");
  //   console.log("FUBAR");
  // };
});
