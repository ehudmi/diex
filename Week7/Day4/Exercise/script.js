// Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?

const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person;

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
);

// Predicted - `I am John Doe from Vancouver. Latitude (49.2827), Longitude (-123.1207)`

// Exercise 2: Display Student Info
// Instructions
// Create a function called displayStudentInfo(studentObject) that accepts an object as a parameter.
// For example displayStudentInfo({first: 'Elie', last:'Schoppik'}).
// Destructure the parameter inside the function and return a string as the example seen below:
// displayStudentInfo({first: 'Elie', last:'Schoppik'})
// output : 'Your full name is Elie Schoppik'`

const displayStudentInfo = ({ first, last }) => {
  console.log(`Your full name is ${first} ${last}`);
};

displayStudentInfo({ first: "Ehud", last: "Miron" });

// Exercise 3: User & Id
// Instructions
// Using this object

const users = { user1: 18273, user2: 92833, user3: 90315 };

// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.

const users1 = Object.entries(users);

console.log(users1);

// Modify the outcome of part 1, by multiplying the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

users1.forEach((val) => (val[1] = val[1] * 2));

console.log(users1);

// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);

// Predicted - Object

// Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:

class Dog {
  constructor(name) {
    this.name = name;
  }
}

// Analyze the options below. Which constructor will successfully extend the Dog class?
// 1

// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// }

// 2

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
}

// Predicted - this is the right extending constructor

// // 3
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// }

// // 4
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// }

// Exercise 6 : Challenges
// Evaluate these (ie True or False)

[2] === [2]; // - False
//  {} === {} - False

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
// the value is 4 - we set it directly
console.log(object2.number);
// the value is 4 - we redefined object1.number and object 2 is a reference to object 1
console.log(object3.number);
// the value is 4 - we redefined object1.number and object 3 is a reference to object 1
console.log(object4.number);
// the value is 5 - object 4 is a different number

// Create a class Animal with the attributes name, type and color

class Animal {
  constructor(animalName, type, color) {
    this.animalName = animalName;
    this.type = type;
    this.color = color;
  }
}

// Create a class Mamal that extends from the Animal class. It has a method called sound().
// This method takes a parameter: the sound the animal makes, and returns the details of the
// animal (name, type and color) as well as the sound it makes.

class Mammal extends Animal {
  constructor(animalName, type, color) {
    super(animalName, type, color);
  }
  sound = (val) =>
    console.log(
      `This is ${this.animalName}, it is a ${this.color} ${this.type}, and it makes the sound ${val}`
    );
}

// Create a cow object that accepts a name, a type and a color and calls the sound method that moo’s her name, type and color.

const cow = new Mammal("Hilda", "cow", "black");

cow.sound("moo");

// `This is ${name}, it is a ${color} ${type}, and it makes the sound ${val}`
