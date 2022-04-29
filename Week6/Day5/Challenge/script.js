// Challenge - True or False

let testArray = [1, 2, 3, 4];

const allTruthy = (arr) =>
  arr.every((val) =>
    (val === Number(val) && val != 0) || (val === String(val) && val != "")
      ? true
      : false
  );

console.log(allTruthy(testArray));
