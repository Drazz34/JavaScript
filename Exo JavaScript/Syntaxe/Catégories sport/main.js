
function categorie() {

    let age = prompt("Veuillez saisir votre âge", "votre âge");

    let categorie = ["Poussin", "Pupille", "Minime", "Cadet"];
    
    if(age == 6 || age == 7) {
        alert("Vous êtes dans la catégorie " + categorie[0]);
    } else if(age == 8 || age == 9) {
        alert("Vous êtes dans la catégorie " + categorie[1]);
    } else if(age == 10 || age == 11) {
        alert("Vous êtes dans la catégorie " + categorie[2]);
    } else if(age >=12 && age <=17) {
        alert("Vous êtes dans la catégorie " + categorie[3]);
    } else {
        alert("Âge non valide");
    }
}
