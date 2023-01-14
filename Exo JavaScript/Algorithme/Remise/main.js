let montantInitial = document.querySelector(".envoie");

montantInitial.addEventListener("click", e => {
    let montant = document.getElementById("montant").value;
    if (montant > 150) {
        let facture = montant - (montant / 100);
        document.getElementById("remise").value = facture;
    } else {
        alert("Montant trop petit, remise non possible");
    }
});