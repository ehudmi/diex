// Robo-Friends

const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

// Create a roboCards Class that will hold all the data so we don't modify the original data
// also it will hold the method for creating the cards

class roboCards {
  constructor(id, name, username, email, image) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.image = image;
  }
  createCard = () => {
    this.colDiv = document.createElement("div");
    let cardDiv = document.createElement("div");
    let roboImg = document.createElement("img");
    let cardBodyDiv = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardText = document.createElement("p");
    let container = document.querySelector("#robo-container");
    container.appendChild(this.colDiv);
    this.colDiv.classList.add("col");
    this.colDiv.appendChild(cardDiv);
    cardDiv.classList.add("card");
    cardDiv.appendChild(roboImg);
    roboImg.classList.add("card-img");
    roboImg.src = this.image;
    cardDiv.appendChild(cardBodyDiv);
    cardBodyDiv.classList.add("card-body");
    cardBodyDiv.appendChild(cardTitle);
    cardTitle.appendChild(document.createTextNode(this.name));
    cardTitle.classList.add("card-title");
    cardBodyDiv.appendChild(cardText);
    cardBodyDiv.appendChild(document.createTextNode(this.email));
    cardText.classList.add("card-text");
  };
  hideCard = () => {
    this.colDiv.classList.add("d-none");
  };
  showCard = () => {
    this.colDiv.classList.remove("d-none");
  };
}

// create an array for the instances of the roboCards

let roboFriendsCards = [];
for (i in robots) {
  roboFriendsCards[i] = new roboCards(
    robots[i].id,
    robots[i].name,
    robots[i].username,
    robots[i].email,
    robots[i].image
  );
  roboFriendsCards[i].createCard();
}

// filter the cards and make sure the characters used are valid and show only what is filtered
// while hiding the rest

let searchString = "";

const checkCharacters = (e) => {
  let keyCode = e.keyCode || e.which;

  if (keyCode == 8) {
    searchString = searchString.slice(0, searchString.length - 1);
  } else if (keyCode == 46) {
    searchString = "";
  } else
    searchString = searchString + String.fromCharCode(keyCode).toLowerCase();

  roboFriendsCards.forEach((elem) => {
    if (elem.name.toLowerCase().includes(searchString)) {
      elem.showCard();
    } else elem.hideCard();
  });
};

document.querySelector("#search").addEventListener("keydown", checkCharacters);
