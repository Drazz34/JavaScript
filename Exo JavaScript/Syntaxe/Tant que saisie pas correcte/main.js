// function tama() {

//     let sexe = prompt("Voulez-vous un Tamagotchi mâle ou femelle ? ", "Saisissez votre réponse ici");
//     let masculin = "male";
//     let feminin = "femelle";

//     if (sexe.toLowerCase() == masculin || sexe.toLowerCase() == "mâle") {
//         alert("Votre Tamagotchi est un mâle");
//     } else if (sexe.toLowerCase() == feminin) {
//         alert("Votre Tamagotchi est une femelle");
//     } else {
//         alert("Sexe non conforme");
//         tama();
//     }
// }

let btn_sexe = document.querySelector(".btn_sexe");

function traitement(texte) {
    return texte.toLowerCase().replace("â", "a");
}

btn_sexe.addEventListener("click", e => {
    let reponse = prompt ("Quel est le genre de votre Tamagotchi?");
    reponse = traitement(reponse);
    while (reponse != "male"  && reponse != "femelle") {
        reponse = prompt("Réponse incorrecte");
        reponse = traitement(reponse); // ou directement reponse = traitement(prompt("Réponse incorrecte"));
    }
});