// function longueurChaine() {
//     let message = prompt("Ecris une phrase", "Ecris ici");
//     if (message) {
//         alert(message.length + "\n" + message[0].toUpperCase() + message.slice(1, -1));
//     } else {
//         return
//     }
// }

// correction :

function chaine(params) {
    let taille = params.length;
    console.log(taille);
    return params[0].toUpperCase() + params.slice(1, -1); // à la place de slice() voir subString()
}

console.log(chaine("bonjour, je m'appelle Coincoin"));