// function contenu() {
//     let my_text = document.getElementById("text").value;
//     if (my_text == "") {
//         alert("Veuillez saisir du texte");
//     } else {
//     alert (my_text);
//     }
// }

let btn_envoyer = document.querySelector(".btn_envoyer");
let alerte = document.querySelector(".alerte");

btn_envoyer.addEventListener("click", e => {
    if (alerte.value == "") {
        alert("Champ vide");
    } else {
        alert(alerte.value);
    }
});