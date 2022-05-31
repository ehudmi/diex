// the constants for the app

const myForm = document.forms[0];
const apiKey = "6bc236fa8bd5e7e03f83fd8cea3eac74";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`;
const iconURL = `http://openweathermap.org/img/wn/`;

// Establish Location and get local weather data

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let localApiURL = `${apiURL}&lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
      let firstXhr = new XMLHttpRequest();
      firstXhr.open("GET", localApiURL);
      firstXhr.responseType = "json";
      firstXhr.send();
      firstXhr.onload = () => {
        if (firstXhr.status != 200) {
          alert(`Error ${firstXhr.status}: ${firstXhr.statusText}`);
        } else {
          let currentLocation = document.createElement("h4");
          let currentLocationText = document.createTextNode(
            `Current position: Latitude - ${position.coords.latitude} ; Longitude - ${position.coords.longitude}`
          );
          document
            .querySelector("#current-location")
            .appendChild(currentLocation);
          currentLocation.appendChild(currentLocationText);
          let currentWeather = document.createElement("h4");
          let currentWeatherText = document.createTextNode(
            `Your local weather is ${firstXhr.response.weather[0].description}`
          );
          document
            .querySelector("#current-location")
            .appendChild(currentWeather);
          currentWeather.appendChild(currentWeatherText);
          let currentWeatherIcon = document.createElement("img");
          currentWeatherIcon.src = `${iconURL}${firstXhr.response.weather[0].icon}@2x.png`;
          document
            .querySelector("#current-location")
            .appendChild(currentWeatherIcon);
        }
      };
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
};

getLocation();

// Convert time function

const convertUnixTime = (unix_timestamp) => {
  let date = new Date(unix_timestamp * 1000);
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let formattedTime = hours + ":" + minutes.substr(-2);
  return formattedTime;
};

const convertTemp = () => {
  if (document.querySelector("#no").checked) {
    document.querySelectorAll(".card-temp").forEach((element) => {
      if (element.innerHTML.includes("F")) {
        element.innerHTML = `${(
          (Number(element.innerHTML.slice(0, 5)) * 9) / 5 +
          32
        ).toFixed(2)}, °C`;
      }
    });
  } else if (document.querySelector("#yes").checked) {
    document.querySelectorAll(".card-temp").forEach((element) => {
      if (element.innerHTML.includes("C")) {
        element.innerHTML = `${(
          ((Number(element.innerHTML.slice(0, 5)) - 32) * 5) /
          9
        ).toFixed(2)}, °F`;
      }
    });
  }
};

myForm.querySelector("#find").addEventListener("click", (e) => {
  let xhr = new XMLHttpRequest();

  // Configure my request

  let city = myForm.querySelector("#city").value;
  const cityApiURL = `${apiURL}&q=${city}`;

  xhr.open("GET", cityApiURL);
  xhr.responseType = "json";
  xhr.send();
  xhr.onload = () => {
    if (xhr.status != 200) {
      let errorModal = new bootstrap.Modal(
        document.querySelector("#error_modal")
      );
      errorModal.show();
    } else {
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
        `${xhr.response.name} , ${xhr.response.sys.country}`
      );
      cardTitle.appendChild(cardTitleText);
      let cardTemp = cardBodyDiv.appendChild(document.createElement("h2"));
      cardTemp.classList.add("card-temp");
      let cardTempText = document.createTextNode(
        `${Number(xhr.response.main.temp).toFixed(2)} , °C`
      );
      cardTemp.appendChild(cardTempText);
      let imgIcon = document.createElement("img");
      imgIcon.src = `${iconURL}${xhr.response.weather[0].icon}@2x.png`;
      imgIcon.alt = xhr.response.weather[0].description;
      cardBodyDiv.appendChild(imgIcon);
      let otherItems = document.createElement("p");
      let otherItemsText = document.createTextNode(`
      weather: ${xhr.response.weather[0].description}
      humidity: ${xhr.response.main.humidity} %
      wind - degree: ${xhr.response.wind.deg} , gust - ${
        xhr.response.wind.gust
      } , speed - ${xhr.response.wind.speed}
      sunrise time: ${convertUnixTime(xhr.response.sys.sunrise)}
      sunset time: ${convertUnixTime(xhr.response.sys.sunset)}`);
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
});

document.querySelector("#no").addEventListener("click", convertTemp);
document.querySelector("#yes").addEventListener("click", convertTemp);
