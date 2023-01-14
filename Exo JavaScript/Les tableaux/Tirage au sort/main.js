let liste_nom = [];

let bouton = document.querySelector(".ajouter_nom");
bouton.addEventListener("click", e => {
    let votre_nom = prompt("Entrez votre nom");
    liste_nom.push(votre_nom);
    console.log(liste_nom);
});

let tirage = document.querySelector(".tirage");
tirage.addEventListener("click", e => {
    if(liste_nom.length > 0) {
        let random = Math.floor(Math.random() * liste_nom.length);
        alert("Le nom gagnant est : " + liste_nom[random]);
    } else {
        alert("Veuillez ajouter des noms");
    }
});