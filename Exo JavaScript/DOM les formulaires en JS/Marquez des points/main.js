// Compter les points obtenus et faites un commentaire en fonction du résultat.

let btn_submit = document.querySelector("#submit");

btn_submit.addEventListener("click", e => {
    // Pour éviter le rafraichissement de la page, comportement par défaut du bouton submit
    e.preventDefault();
    // réponses correctes
    let rep_correct = 0;

    // boucle pour passer en revue toutes les questions
    for (let i = 1; i <= 5; i++) {
        let radio_nom = document.getElementsByName("q" + i);
        
        // boucle pour vérifier les réponses dans chaque bouton
        for (let j = 0; j < radio_nom.length; j++) {
            let radio_valeur = radio_nom[j];
            if (radio_valeur.value == "vrai" && radio_valeur.checked) {
                rep_correct++;
            }
        }
    }
    //réponse en fonction du score
    let resultat = document.querySelector("#score").textContent;
    if(rep_correct == 0) {
        resultat = "Réponse(s) correcte(s) : " + rep_correct + " Nul !";
    } else if(rep_correct == 1) {
        resultat = "Réponse(s) correcte(s) : " + rep_correct + " Noob !";
    } else if(rep_correct == 2) {
        resultat = "Réponse(s) correcte(s) : " + rep_correct + " Bof !";
    } else if(rep_correct == 3) {
        resultat = "Réponse(s) correcte(s) : " + rep_correct + " Moyen !";
    } else if(rep_correct == 4) {
        resultat = "Réponse(s) correcte(s) : " + rep_correct + " Pas mal !";
    } else {
        resultat = "Réponse(s) correcte(s) : " + rep_correct + " Bien joué beau gosse !";
    }

    //affichage du résultat personnalisé
    document.querySelector("#score").textContent = resultat;
})