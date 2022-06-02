// Daily Challenge: Currency Converter
// Instructions
// You will create a currencies converter:

// In this application we’re going receive data from two asynchronous sources.

// You will use :

// This documentation
// and this API key 4b15e8d0eb3326f5e043117c

// Note
// The program should take the currency which the user currently has and the currency in which they would like to receive,
// as well as the amount of money. Afterwards, the program will output the correct exchange rate based on the data from the APIs.

// First, you need to fetch all the supported currencies, in order to add the currencies options
// (ie FROM - To) in the currency converter. Check out this page on Supported Codes Endpoint from the ExchangeRate API documentation.

// To convert from a currency, to another one, you need to fetch conversion rate from the Pair Conversion API endpoint.
// Check out this page on Pair conversion requests from the ExchangeRate API documentation.
// Hint: You could also supply an optional AMOUNT variable in the query of the request.

// Bonus: Add this “switch” button on the page, when clicked on it will switch the currencies and display the new amount converted.
// Example : if the conversion was from EUR to GBP, as soon as the button is clicked on, the conversion should be from GBP to EUR.
// GET https://v6.exchangerate-api.com/v6/YOUR-API-KEY/latest/USD

// Setting up the global variables

const myForm = document.forms[0];
const apiKey = "67e4f60b8aba910b5fb47978";
const apiUrl = "https://v6.exchangerate-api.com/v6/";

const convertObject = {
  sourceCurrency: "",
  targetCurrency: "",
  amount: 0,
};

let convertUrl = "";

// Get the list of supported codes on form load

const loadList = async () => {
  let url = `${apiUrl}${apiKey}/codes`;
  let res = await fetch(url);
  let resJson = await res.json();
  resJson.supported_codes.forEach((arr) => {
    let newOption = document.createElement("option");
    let optionText = document.createTextNode(`${arr[0]} - ${arr[1]}`);
    newOption.appendChild(optionText);
    newOption.value = arr[0];
    let newOptionSecond = newOption.cloneNode(true);
    myForm.querySelector("#firstCurrency").appendChild(newOption);
    myForm.querySelector("#secondCurrency").appendChild(newOptionSecond);
  });
};

// Async function for retrieving the conversion pair data

const getConversion = async () => {
  while (document.querySelector("#conversion").firstChild) {
    document
      .querySelector("#conversion")
      .removeChild(document.querySelector("#conversion").firstChild);
  }
  let res = await fetch(convertUrl);
  let resJson = await res.json();
  let conversionResult = `${Number(resJson.conversion_result).toFixed(2)} ${
    convertObject.targetCurrency
  }`;
  let conversionResultText = document.createTextNode(conversionResult);
  document.querySelector("#conversion").appendChild(conversionResultText);
  return resJson;
};

// function for switching between the currency pair

const reverseConversion = () => {
  while (document.querySelector("#conversion").firstChild) {
    document
      .querySelector("#conversion")
      .removeChild(document.querySelector("#conversion").firstChild);
  }
  convertObject.sourceCurrency =
    document.querySelector("#secondCurrency").value;
  convertObject.targetCurrency = document.querySelector("#firstCurrency").value;
  convertUrl = `${apiUrl}${apiKey}/pair/${convertObject.sourceCurrency}/${convertObject.targetCurrency}/${convertObject.amount}`;
  getConversion();
  document.querySelector("#firstCurrency").value = convertObject.sourceCurrency;
  document.querySelector("#secondCurrency").value =
    convertObject.targetCurrency;
};

// Event listeners

myForm.addEventListener("load", loadList());

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  convertObject.sourceCurrency = document.querySelector("#firstCurrency").value;
  convertObject.targetCurrency =
    document.querySelector("#secondCurrency").value;
  convertObject.amount = document.querySelector("#amount").value;
  convertUrl = `${apiUrl}${apiKey}/pair/${convertObject.sourceCurrency}/${convertObject.targetCurrency}/${convertObject.amount}`;
  getConversion();
});

myForm.querySelector("#reverseConvert").addEventListener("click", (e) => {
  e.preventDefault();
  reverseConversion();
});
