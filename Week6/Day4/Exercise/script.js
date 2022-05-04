// Exercise 1 : Find The Sum

// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum

const calcSum = (a, b) => a + b;

console.log(calcSum(3, 4));

// Exercise 2 : Kg And Grams

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

function convertWeight(kg) {
  return kg / 1000;
}

const convertWeight1 = function (kg) {
  return kg / 1000;
};

// The difference between function declaration and expression is that declared functions get hoisted.
// Expressed functions don't get hoisted and their variables remain within their scope

const convertWeight2 = (kg) => kg / 1000;

// Exercise 3 : Fortune Teller

// Create a self invoking function that takes 4 arguments: number of children, partner’s name,
// geographic location, job title.
// The function should display in the DOM a sentence like
// "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

(function (num, part, geo, job) {
  (num = 5), (part = "Joe"), (geo = "London"), (job = "waitress");
  document.write(
    "<div>" +
      `You will be a ${job} in ${geo}, and married to ${part} with ${num} kids.` +
      "</div>"
  );
})();

// Exercise 4 : Welcome

// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking function that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

// (function (name) {
//   name = prompt("Enter your user name");
//   let newDiv = document.createElement("div");
//   let namePic = document.createElement("img");
//   namePic.src = "./assets/ehud.jpg";
//   let divText = document.createTextNode(name);
//   document.querySelector("nav").appendChild(newDiv);
//   document.querySelector("div").appendChild(namePic);
//   document.querySelector("div").appendChild(divText);
// })();

// Exercise 5 : Juice Bar

// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like
// The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

const makeJuice = (size) => {
  const addIngredients = (ing1, ing2, ing3) => {
    (ing1 = "pineapple"), (ing2 = "apple"), (ing3 = "orange");
    document.write(
      "<div>" +
        `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}` +
        "</div>"
    );
  };
  return addIngredients();
};

makeJuice("giant");

// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like
// The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE.
// Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

const makeJuice1 = (size) => {
  let ingredients = [];

  const addIngredients = (ing1, ing2, ing3) => {
    ingredients.push(ing1);
    ingredients.push(ing2);
    ingredients.push(ing3);
  };

  addIngredients("pineapple", "apple", "orange");
  addIngredients("carrots", "cucumbers", "coconut");

  const displayJuice = () => {
    document.write(
      "<p>" + `The client wants a ${size} juice, containing ` + "</p>"
    );
    document.write(
      "<p>" +
        ingredients.forEach(function (value) {
          document
            .querySelector("p")
            .insertAdjacentText("beforeend", `${value}, `);
        }) +
        "</p>"
    );
  };
  return displayJuice();
};

makeJuice1("small");
