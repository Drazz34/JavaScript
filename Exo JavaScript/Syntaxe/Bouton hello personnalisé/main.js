// function hello_perso() {
//     let nom = prompt("Saisir votre nom");
//     if (nom) {
//         nom;
//     } else {
//         // return;
//     }
//     let confirmation = confirm("Êtes-vous sûr?");
//     if(confirmation) {
//         alert("Hello " + nom);
//     } else {
//         hello_perso();
//     }
// }

let btn_prenom = document.querySelector(".btn_nom");
btn_prenom.addEventListener("click", e => {
    let prenom = prompt("Saisir votre prénom", "prénom");
    let confirmation = confirm("Êtes-vous sûr?");
    if (confirmation) {
        alert("Hello " + prenom);
    } else {
        alert("erreur");
    }
});