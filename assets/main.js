// let numb1 = prompt("Enter a number");
// let numb2 = prompt("Enter another number");

// console.log(numb1, numb2);

// if (numb1 > numb2) {
//     console.log(numb1 + " é maior que " + numb2)

// } else (numb2 < numb1) {
//     console.log(numb2 + " é maior que " + numb1)
// }

const word1 = prompt("Enter a word");
const word2 = prompt("Enter another word");

wordOne = word1.length.value;
wordtwo = word2.length.value;

console.log(word1, word2);

if (wordOne == wordtwo) {
    console.log(wordOne + " é uguale a " + wordtwo);
} else if (wordOne < wordtwo) {
    console.log(wordOne + " é minore di " + wordtwo);
} else if (wordtwo < wordOne) {
    console.log(wordtwo + " é minore di " + wordOne);
}