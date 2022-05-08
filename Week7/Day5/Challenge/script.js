// Daily Challenge: Anagram
// Instructions
// Create a function that:

// takes in two s as two parameters
// and returns a boolean that indicates whether or not the first  is an anagram of the second .
// Some Help

// What is an anagram?
// An anagram is another word or phrase formed by rearranging letters of the first word or phrase.

// Example of anagrams

// "Astronomer" is an anagram of "Moon starer"
// "School master" is an anagram of "The classroom"
// "The Morse Code" is an anagram of "Here come dots"

// Do we need to consider whitespace?
// Trim whitespace prior to comparison.

const checkAnagram = (str1, str2) => {
  str1 = str1.trim().toLowerCase().replace(" ", "");
  let strArray1 = str1.split("").sort();
  str2 = str2.trim().toLowerCase().replace(" ", "");
  let strArray2 = str2.split("").sort();
  if (
    strArray1.length === strArray2.length &&
    strArray1.every((val, index) => val === strArray2[index])
  ) {
    return true;
  } else return false;
};

console.log(checkAnagram("Astronomer", "Moon starer"));
