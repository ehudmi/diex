// Exercise 1

function calcBMI(weight, height) {
  return weight / height ** 2;
}

let object1 = {
  FullName: "Ehud Miron",
  Mass: "87",
  Height: "1.83",
};
let object2 = {
  FullName: "Uri Miron",
  Mass: "97",
  Height: "1.93",
};
console.log(object1);
object1.BMI = calcBMI(object1.Mass, object1.Height);
console.log(object1);
object2.BMI = calcBMI(object2.Mass, object2.Height);
console.log(object2);

function bmiCompare(bmi1, bmi2) {
  return bmi1 - bmi2;
}
console.log(bmiCompare(object1.BMI, object2.BMI));

if (bmiCompare(object1.BMI, object2.BMI) == 0) {
  console.log(`They both weigh the same`);
} else if (bmiCompare(object1.BMI, object2.BMI) < 0) {
  console.log(`${object2.FullName} weighs more than ${object1.FullName}`);
} else {
  console.log(`${object1.FullName} weighs more than ${object2.FullName}`);
}

// Exercise 2

function findAvg(gradesList) {
  let sumGrades = 0;
  for (let i in gradesList) {
    sumGrades = sumGrades + gradesList[i];
  }
  return sumGrades / gradesList.length;
}
let list1 = [12, 15, 24, 78, 56, 89];
console.log(findAvg(list1));

// let newList = [];
// newList = prompt(`Give me a list of grades separated by commas`).split(",");

// console.log(newList);
// console.log(findAvg(newList));

function avgResult(a) {
  if (a > 65) {
    console.log(a);
    console.log(`You passed`);
  } else if (a < 65) {
    console.log(a);
    console.log(`You failed - you must repeat the course`);
  } else {
    console.log(a);
    console.log(`I don't know what to do`);
  }
}

console.log(avgResult(findAvg(list1)));
