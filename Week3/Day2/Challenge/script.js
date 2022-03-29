// Exercise 1
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
fruits.shift();
// Sort the array in alphabetical order.
fruits.sort();
// Add “Kiwi” to the end of the array.
fruits.push("Kiwi");
// Remove “Apples” from the array.
fruits.splice(0, 1);
// Sort the array in reverse order.
fruits.reverse();

// Exercise 2
let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”
console.log(moreFruits[1][1][0]);
