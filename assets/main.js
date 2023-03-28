// let numb1 = prompt("Enter a number");
// let numb2 = prompt("Enter another number");

// console.log(numb1, numb2);

// if (numb1 > numb2) {
//     console.log(numb1 + " é maior que " + numb2)

// } else (numb2 < numb1) {
//     console.log(numb2 + " é maior que " + numb1)
// }

// const word1 = prompt("Enter a word");
// const word2 = prompt("Enter another word");


// console.log(word1, word2);

// if (word1.length == word2.length) {
//     console.log(word1 + " é uguale a " + word2);
// } else if (word1.length < word2.length) {
//     console.log(word1 + " é minore di " + word2);
// } else if (word2.length < word1.length) {
//     console.log(word2 + " é minore di " + word1);
// }


// blocco 3



// let adding = 0


// for (let i = 0; i <= 10; i++) {
//     const number = parseInt(prompt("Enter a number"));
//     console.log(number);

//     adding += number;

//     console.log(adding);

// }

//  Blocco 4

// let invited [""]

// for (let i = 0; i <= 6; i++) {

//     inviting[i] = prompt("Enter a name");
//     console.log(invited[i]);

//     if (inviting[i] == "invited") {

//         console.log(`L'invitato è presente nella lista`);

//     } else {
//         invited.push(inviting[i]);
//     }
// }

// BLocco 5

let numberarray = [];

for (let i = 0; i < 6; i++) {
    const numero = parseFloat(prompt("Enter a number"));
    console.log(numero[i]);

    if (numero % 2 != 0) {
        numberarray.push(numero);

    }
}
console.log(numberarray);
