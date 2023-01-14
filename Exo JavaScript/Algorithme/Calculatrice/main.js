let modale = document.querySelector(".modale");

// Prend les nombres et l'opérateur entrés par l'utilisateur puis le résultat en console.

modale.addEventListener("click", e => {
    
        let nombre1 = parseInt(prompt("Entrez votre premier nombre"));
        let operateur = prompt("Choisissez l'opérateur +, -, / ou *");
        let nombre2 = parseInt(prompt("Entrez votre deuxième nombre"));
        let confirmation = confirm("Voulez-vous voir le résultat ?");
        if (confirmation === false) {
            return
        }
        if ( isNaN (nombre1 && nombre2)) {
            alert("Veuillez entrer des nombres");
        }
        console.log(resultat(nombre1, operateur, nombre2));
});

// resultat() réalise l'opération demandée

function resultat(nombre1, operateur, nombre2) {
    if (operateur === "+") {
        nombre1 += nombre2;
    } else if (operateur === "-") {
        nombre1 -= nombre2;
    } else if (operateur === "/") {
        nombre1 /= nombre2;
    } else if (operateur === "*") {
        nombre1 *= nombre2;
    } else {
        alert("Opérateur non valide");
    }
    return nombre1;
}

// partie calculatrice

//fonction de resultat

function resultat() {
    let x = 0;
    x = eval(window.document.Calculette.affiche.value);
    window.document.Calculette.affiche.value = x;
}

// fonction d'affichage des caractères

function ajouter(caracteres) {
    window.document.Calculette.affiche.value =
    window.document.Calculette.affiche.value + caracteres;
  }
 
//fonction operation 

function operation(signe) {
    window.document.Calculette.affiche.value =
    window.document.Calculette.affiche.value + signe;
}

//fonctions effectuant des operations speciales (via des methodes intégrées à javascript)

function fonctionSpeciale(opespeciale) {
    switch (opespeciale) {
        case "sqrt":
            document.Calculette.affiche.value = Math.sqrt(eval(document.Calculette.affiche.value));
            break;
        case "log":
            document.Calculette.affiche.value = Math.log(eval(document.Calculette.affiche.value));
            break;
        case "pow":
            document.Calculette.affiche.value = Math.pow(eval(document.Calculette.affiche.value), 2);
            break;
    }
}