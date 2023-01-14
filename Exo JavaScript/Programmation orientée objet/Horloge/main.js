class Horloge {

    /**
 * @param {Number} heure
 * @param {Number} minute
 * @param {Number} seconde
    */

    constructor() {
        let today = new Date();
        this.heure = today.getHours();
        this.minute = today.getMinutes();
        this.seconde = today.getSeconds();
    }
    affichage() {
        return `${this.heure}h ${this.minute}min ${this.seconde}sec`;
    }

}

let horloge1 = new Horloge();

setInterval(() => {
    
        if (horloge1.seconde == 60) {
            horloge1.seconde = 0;
            horloge1.minute++;
        }
        if (horloge1.minute == 60) {
            horloge1.minute = 0;
            horloge1.heure++;
        }
        if (horloge1.heure == 24) {
            horloge1.heure = 0;
        }
        horloge1.seconde++;
    
    document.querySelector(".affichage").innerHTML = horloge1.affichage();
}, 1000);

let bouton = document.querySelector(".bouton");

bouton.addEventListener("click", e => {
    horloge1.seconde += 28;
    horloge1.minute += 21;
    if (horloge1.seconde > 60) {
        horloge1.seconde -= 60;
        horloge1.minute++;
    }
    if (horloge1.minute > 60) {
        horloge1.minute -= 60;
        horloge1.heure++;
    }
});

// pour avoir l'heure locale
// setInterval(() => {
//     let d = new Date();
//     document.querySelector(".affichage").innerHTML = d.toLocaleTimeString();
// }, 1000)
