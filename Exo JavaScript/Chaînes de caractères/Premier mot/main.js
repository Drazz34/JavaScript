// let firstWord = "Ceci n'est pas une phrase.";
// let premierMot = firstWord.substring(0, firstWord.indexOf(" "));
// alert(premierMot);

// code bon de ma part :

// function firstWord() {
//     let firstWord = "Ceci n'est pas une phrase.";
//     let premierMot = firstWord.substring(0, firstWord.indexOf(" "));
//     alert(premierMot);
// }

// correction :

function first_word(params) {
    let words = params.split(" ");
    return words[0];
}

console.log(first_word("Hello World ça gaze ?"));