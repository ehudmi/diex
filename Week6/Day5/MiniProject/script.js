// Mini-Project - Quote Generator

const myQuotes = [
  {
    id: 0,
    author: "Neo",
    quote: "There is no spoon",
    likes: 0,
  },
  {
    id: 1,
    author: "Verbal Kint",
    quote: "A man can convince anyone he's somebody else,\nbut never himself",
    likes: 0,
  },
  {
    id: 2,
    author: "Joliet' Jake Blues",
    quote: "They're not going to catch us;\nWe're on a mission from God",
    likes: 0,
  },
  {
    id: 3,
    author: "Stacker Pentecost",
    quote:
      "Haven't you heard, Mr. Beckett?\nThe world is coming to an end.\nSo where would you rather die?\nHere? Or in a Jaeger?",
    likes: 0,
  },
  {
    id: 4,
    author: "Lester Siegel",
    quote: "Arrrr-go fuck yourself!!!",
    likes: 0,
  },
  {
    id: 5,
    author: "Ace Ventura",
    quote: "If I'm not back in five minutes,\njust wait longer",
    likes: 0,
  },
  {
    id: 6,
    author: "Butch Coolidge",
    quote: "Zed's dead, baby.\nZed's dead",
    likes: 0,
  },
];

const quoteSection = document.querySelector("section");
const quoteForm = document.forms[0];
const searchForm = document.forms[1];
const inputQuote = quoteForm.querySelector(`input[id="inputQuote"]`);
const inputAuthor = quoteForm.querySelector(`input[id="inputAuthor"]`);
const displayInfo = document.querySelector(`input[id="displayInfo"]`);
const searchInput = searchForm.querySelector(`input[id="searchInput"]`);
let currentQuote = null;

const createRandom = () => {
  let randomNum = 0;
  do {
    randomNum = Math.floor(Math.abs(Math.random() * (myQuotes.length - 1)));
  } while (currentQuote == randomNum);
  currentQuote = randomNum;
};

const createQuote = () => {
  let quoteDiv = document.createElement("q");
  let quoteAuthor = document.createElement("figcaption");
  let chosenQuote = myQuotes[currentQuote].quote;
  let chosenAuthor = myQuotes[currentQuote].author;
  let insertQuote = document.createTextNode(chosenQuote);
  let insertAuthor = document.createTextNode(chosenAuthor);
  quoteSection.insertBefore(quoteDiv, quoteSection.children[1]);
  quoteDiv.appendChild(insertQuote);
  quoteSection.insertBefore(quoteAuthor, quoteSection.children[2]);
  quoteAuthor.appendChild(insertAuthor);
  quoteAuthor.classList.add("blockquote-footer");
};

const firstQuote = () => {
  createRandom();
  createQuote();
};

const deleteQuote = () => {
  if (document.querySelector("q") != null) {
    document.querySelector("q").remove();
    document.querySelector("figcaption").remove();
  }
};

const genQuote = () => {
  deleteQuote();
  createRandom();
  createQuote();
};

const addNewQuote = () => {
  if (inputQuote.value != "" && inputAuthor.value != "") {
    myQuotes.push({
      id: myQuotes.length,
      author: inputAuthor.value,
      quote: inputQuote.value,
      likes: 0,
    });
    console.log(myQuotes);
  } else alert("not a valid quote");
};

const countAllChar = () =>
  (displayInfo.value = myQuotes[currentQuote].quote.length);

const countOnlyChar = () =>
  (displayInfo.value = myQuotes[currentQuote].quote.replace(/ /g, "").length);

const countWords = () =>
  (displayInfo.value = myQuotes[currentQuote].quote.split(" ").length);

const like = () => {
  myQuotes[currentQuote].likes++;
  displayInfo.value = myQuotes[currentQuote].likes;
};

const searchQuote = () =>
  (currentQuote = myQuotes.findIndex(
    (i) => i.author.toLowerCase() == searchInput.value
  ));

const updateSearchQuote = () => {
  deleteQuote();
  searchQuote();
  createQuote();
};

const nextPrevQuote = (i) => {
  if (i <= 1 && currentQuote < myQuotes.length - 2) {
    currentQuote = currentQuote + i;
  } else currentQuote = 0;
  deleteQuote();
  //   searchQuote();
  //   createQuote();
};

window.addEventListener("load", firstQuote);
document
  .querySelector(`button[id="buttonGenerate"]`)
  .addEventListener("click", genQuote);

quoteForm
  .querySelector(`button[id="addQuote"]`)
  .addEventListener("click", addNewQuote);

document
  .querySelector(`button[id="buttonCountAll"]`)
  .addEventListener("click", countAllChar);

document
  .querySelector(`button[id="buttonCountChar"]`)
  .addEventListener("click", countOnlyChar);

document
  .querySelector(`button[id="buttonCountWords"]`)
  .addEventListener("click", countWords);

document
  .querySelector(`button[id="buttonLike"]`)
  .addEventListener("click", like);

document
  .querySelector(`button[id="buttonSearch"]`)
  .addEventListener("click", updateSearchQuote);

document
  .querySelector(`button[id="buttonNext"]`)
  .addEventListener("click", nextPrevQuote(1));

document
  .querySelector(`button[id="buttonPrevious"]`)
  .addEventListener("click", nextPrevQuote(-1));
