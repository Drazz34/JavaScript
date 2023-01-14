let btn = document.querySelector(".btn");
let popup = document.querySelector(".popup");

let btnFermeture = document.querySelector(".btn_fermeture");

let minute = 0;
let seconde = 0;

function chrono() {
    document.getElementById("minute").value = minute;
    document.getElementById("seconde").value = seconde;
    seconde ++;
    if (seconde == 60) {
        seconde = 0;
        minute = minute +1;
    }
    compteur = setTimeout("chrono()", 1000);
}

function stopChrono() {
    clearTimeout(compteur);
}

btn.addEventListener("click", e => {
    popup.show();
    chrono();
})

btnFermeture.addEventListener("click", e => {
    popup.close();
    stopChrono();
})