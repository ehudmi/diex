// Exercise 1

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];
console.log(numbers);
console.log(numbers.toString());
console.log(numbers.join("+"));
console.log(numbers.join(" "));
console.log(numbers.join(""));

for (let x = 0; x <= numbers.length; x++) {
  for (let y = 0; y <= numbers.length; y++) {
    if (numbers[y] < numbers[y + 1]) {
      let tempValue = numbers[y];
      numbers[y] = numbers[y + 1];
      numbers[y + 1] = tempValue;
      console.log(`my array is ${numbers}`);
    } else {
      console.log(`my array is ${numbers}`);
    }
  }
}

console.log(numbers);
