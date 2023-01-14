let fruit_array = document.querySelectorAll(".liste_fruit li");
let panier = document.querySelector(".liste_panier");

// le this fait appel au noeud li du tableau fruit_array
// le this.textContent récupère le contenu du noeud li

// for (let i = 0; i < fruit_array.length; i++) {
//     fruit_array[i].addEventListener("click", function() {
//         console.log(this.textContent);
//         let liste = document.createElement("li");
//         liste.textContent = this.textContent;
//         panier.appendChild(liste);
//     })

// }

// même chose qu'au dessus sauf avec une boucle forEach

fruit_array.forEach(element => {
    element.addEventListener("click", function () {
        // console.log(this.textContent);
        if(isFound(this.textContent)) {
            console.log(isFound(this.textContent));
            let liste = document.createElement("li");
            liste.textContent = this.textContent;
            panier.appendChild(liste);
        }
    })
});

// créer une fonction qui vérifie si la li pomme... dans le panier existe déjà ou pas


function isFound(txt) {
    let panier_array = document.querySelectorAll(".liste_panier li");
    let bool = true;
    let compteur = 1;
    panier_array.forEach(element => {
        if (element.textContent == txt) {
            bool = false;
        }
    })
    return bool;
}