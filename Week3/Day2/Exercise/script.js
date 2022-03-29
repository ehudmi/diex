// Exercise 1
let x = "chocolate";
let y = "dinner";
console.log("I eat " + x + " at every " + y);

// Exercise 2
// part 1
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.slice(
  0,
  myWatchedSeriesLength - 1
);
myWatchedSeriesSentence = myWatchedSeriesSentence.join(", ");
myWatchedSeriesSentence = `${myWatchedSeriesSentence} and ${
  myWatchedSeries[myWatchedSeries.length - 1]
}`;
console.log(
  `I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`
);

// part 2
myWatchedSeries.splice(
  myWatchedSeries.indexOf("the big bang theory"),
  1,
  "friends"
);
myWatchedSeries.push("sopranos");
myWatchedSeries.unshift("gomorra");
myWatchedSeries.splice(myWatchedSeries.indexOf("black mirror"), 1);
console.log(
  myWatchedSeries
    .slice(
      myWatchedSeries.indexOf("money heist"),
      myWatchedSeries.indexOf("money heist") + 1
    )
    .toString()
    .charAt(2)
);
console.log(myWatchedSeries);

// Exercise 3
let celsiusTemperature = 35;
let ferenTemperature = (celsiusTemperature / 5) * 9 + 32;

console.log(`${celsiusTemperature} C is ${ferenTemperature} K`);

// Exercise 4
let c;
let a = 34;
let b = 21;

console.log(a + b); //first expression
// Prediction:55 It will sum the 2 numbers
// Actual:55

a = 2;

console.log(a + b); //second expression
// Prediction:23 - the value of a was updated and this will reflect it
// Actual:23
// c is undefined

console.log(3 + 4 + "5");
// Prediction:undefined - there are 2 numbers and one string so it can't be evaluated
// Actual:75 - as string

// Exercise 5
console.log(typeof 15);
// Prediction:Number - 15 is a number
// Actual:Number

console.log(typeof 5.5);
// Prediction:Number - it's a number - even if not integer
// Actual:Number

console.log(typeof NaN);
// Prediction:Number - it has to be assessed against other numbers
// Actual:Number

console.log(typeof "hello");
// Prediction:string - it's a word - a string
// Actual:String

console.log(typeof true);
// Prediction:Boolean
// Actual:Boolean

console.log(typeof (1 != 2));
// Prediction:Boolean - the result is true - 1 is not 2
// Actual:Boolean

console.log("hamburger" + "s");
// Prediction:"hamburgers"
// Actual:"hamburgers"

console.log("hamburgers" - "s");
// Prediction:NaN - not a number - Java will assume I made a mistake in defining
// the variables because of the minus sign
// Actual:NaN

console.log("1" + "3");
// Prediction:13 - 2 strings that get concatenated
// Actual:13

console.log("1" - "3");
// Prediction:-2 - Java will assume I made a mistake in defining the variables because
//  of the minus sign
// Actual:-2

console.log("johnny" + 5);
// Prediction:"johnny5" - 2 strings that get concatenated - Java will assume
//  I made a mistake in defining the second variable
// Actual:"johnny5"

console.log("johnny" - 5);
// Prediction:NaN
// Actual:NaN

console.log(99 * "hello");
// Prediction:NaN - Javascript can't define how to multiply a string
// Actual:NaN

console.log(1 != 1);
// Prediction:false
// Actual:false

console.log(1 == "1");
// Prediction:true - the number is seen as the same as the string content
// Actual:true

console.log(1 === "1");
// Prediction:false - the number is not equal to the string in type
// Actual:false

// Exercise 6
console.log(5 + "34");
// Prediction:39 - 2 strings that get concatenated - Java will assume
//  I made a mistake in defining the first variable
// Actual:539

console.log(5 - "4");
// Prediction:1 - Java will assume I made a mistake in defining the variables because
//  of the minus sign
// Actual:1

console.log(10 % 5);
// Prediction:0 - Modulo operator means how much is left after fitting 5 in 10
// Actual:0

console.log(5 % 10);
// Prediction:false - the operation fails
// Actual:5

console.log("Java" + "Script");
// Prediction:"JavaScript" - 2 strings that get concatenated
// Actual:"JavaScript"

console.log(" " + " ");
// Prediction:"  " - 2 strings that get concatenated
// Actual:"  "

console.log(" " + 0);
// Prediction:" 0" - 2 strings that get concatenated - Java will assume
//  I made a mistake in defining the second variable
// Actual:" 0"

console.log(true + true);
// Prediction:true - 2 truths remain true
// Actual:2

console.log(true + false);
// Prediction:true - it's enough to have one true
// Actual:1

console.log(false + true);
// Prediction:true - it's enough to have one true
// Actual:1

console.log(false - true);
// Prediction:false
// Actual:-1

console.log(!true);
// Prediction:false - the exclamation mark means NOT
// Actual:false

console.log(3 - 4);
// Prediction:-1 - 2 numbers
// Actual:

console.log("Bob" - "bill");
// Prediction:NaN - the operation can't be done because these are strings
// Actual:NaN
