let btnEnvoie = document.querySelector(".envoie");

// renvoie le résultat de la factorielle du nombre choisi

btnEnvoie.addEventListener("click", e => {
    let nombre = document.getElementById("nombre").value;
    if (nombre < 0) {
        alert("Opération impossible");
    } else if (nombre == 0) {
        document.getElementById("factorielle").value = 1;
    } else {
        let result = 1;
        while (nombre > 1) {
            result *= nombre;
            nombre--;
        };
        
        document.getElementById("factorielle").value = result;
    }
});

// renvoie la somme des factorielles

let btnEnvoieSomme = document.querySelector(".envoie_somme");

btnEnvoieSomme.addEventListener("click", e => {
    let nbre = document.getElementById("nb").value;
    
    document.getElementById("somme").value = sommeFacto(nbre);    
});

// facto(nbr1) fait la factorielle du nombre entré par l'utilisateur

function facto(nbr1) {
    if (nbr1 < 0) {
        alert("Opération impossible");
    } else if (nbr1 == 0) {
        result = 1;
    } else {
        let result = 1;
        while (nbr1 > 1) {
            result *= nbr1;
            nbr1--;
        };
        return result;
    }  
}

// sommeFacto(nbr) fait la somme de toutes les factorielles jusqu'au nombre entré par l'utilisateur(ligne 27 et 29)

function sommeFacto(nbr) {
    let resultat = 0; 
    for (let i = 1; i <= nbr; i++) {
        resultat += facto(i);
    }
    return resultat 
}