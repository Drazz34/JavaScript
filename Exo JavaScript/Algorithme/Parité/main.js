// fonction isEven teste si nbr est bien un nombre et si ce nombre est pair ou impair.

function isEven(nbr) {
    if (isNaN(nbr)) {
        alert("Ce n'est pas un nombre");
    } else if ((nbr % 2) == 0) {
        alert(true);
    } else {
        alert(false);
    }
}
isEven(prompt("Ecrivez votre nombre"));