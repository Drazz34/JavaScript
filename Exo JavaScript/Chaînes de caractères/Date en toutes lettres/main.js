let monthNames = [
    "",
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

function myMonth() {
    let monthValue = monthNames[document.getElementById("text").value];
    if(monthValue) {
        alert(monthValue);
    } else {
        alert("Réponse non valide");
    }
}

// Date en lettres et en français

let today = new Date();
let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
alert(today.toLocaleDateString("fr-FR", options));