// ageAppro calcule l'âge d'une personne par rapport à son année de naissance.

function ageAppro(age) {
    let cetteAnnee = new Date().getFullYear();
    if (isNaN(age)) {
        alert("Veuillez utiliser des chiffres")
        ageAppro(prompt("Entrez votre année de naissance"));
    } else if (age > cetteAnnee) {
        alert("Vous n'êtes pas encore né(e) ???")
    } else {
    let votreAge = cetteAnnee - age;
    alert("Vous avez " + votreAge + " an(s).");
    }
}

ageAppro(prompt("Entrez votre année de naissance"));

// ageDate calcule l'âge d'une personne par rapport à sa date de naissance.

function ageDate() {
    let aujourdhui = new Date();
    let dateDeNaissance = document.getElementById('dateDeNaissance').value;

    let annee = dateDeNaissance.substr(6, 4);
    let mois = dateDeNaissance.substr(3, 2);
    let jour = dateDeNaissance.substr(0, 2);

    let naissance = new Date(annee + "-" + mois + "-" + jour);

    let age = aujourdhui.getFullYear() - naissance.getFullYear();
    let m = aujourdhui.getMonth() - naissance.getMonth();
    if (m < 0 || (m === 0 && aujourdhui.getDate() < naissance.getDate())) {
        age = age - 1;
    }

    document.getElementById('age').value = age;
}
