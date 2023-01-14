let string = "hello World. it's a good day today. good."
string = string.toLowerCase();
const array = string.split('. ');
const newArray = [];
array.forEach((sentence) => { newArray.push(sentence.charAt(0).toUpperCase() + sentence.slice(1)) });
let newString = newArray.join('. ');
console.log(newString);

// en camel case

// function camelCase() {
//     let camelCaseString = "hello World";
//     camelCaseString = camelCaseString.split(" ").join("");
//     console.log(camelCaseString);
// }

function camelCase() {
    let camelCaseString = prompt("Ecrivez votre phrase à convertir en camelCase :");
    let supprEspace = camelCaseString.split(" ");
    let premierMot = supprEspace[0].toLowerCase();

    for (let i = 1; i < supprEspace.length; i++) {
        premierMot += 
        supprEspace[i].charAt(0).toUpperCase() + 
        supprEspace[i].toLowerCase().slice(1);
    }
    alert(premierMot);
}

camelCase();