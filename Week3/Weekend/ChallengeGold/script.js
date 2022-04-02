// Exercise 1

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
console.log(numbers.toString());
console.log(numbers.join("+"));
console.log(numbers.join(" "));
console.log(numbers.join(""));

let tempValue = "";
for (let x in numbers) {
  tempValue = numbers.slice(x, x + 1);
  console.log(tempValue);
  for (let y = tempValue; y <= 9; ) {
    numbers.splice(y, 0, tempValue);
  }
}
console.log(numbers);
