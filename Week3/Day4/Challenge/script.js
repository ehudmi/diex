let sentence = "this food is not terribly awfully bad, I may like it";
let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");

if (wordNot < wordBad) {
	sentence = sentence.replace(sentence.slice(wordNot, wordBad + 3), "good");
	console.log(sentence);
} else {
	console.log(sentence);
}
