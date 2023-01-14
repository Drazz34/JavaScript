let ms = 0;
let sec = 0;
let min = 0;
let h = 0;
let time;

let btn_start = document.getElementById("start");
let btn_stop = document.getElementById("stop");
let span = document.getElementsByTagName("span");

// mise en route du chrono avec start(), on ne peut plus recliquer sur le bouton start
// Appel de la fonction update_chrono avec 100ms d'intervalle

function start() {
    time = setInterval(update_chrono, 100);
    btn_start.disabled = true;
}

// update_chrono donne les conditions de changement des nombres

function update_chrono() {
    ms++;
    if (ms == 10) {
        ms = 0;
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        h++;
    }
    // cibler les span et changer leur contenu html
    span[0].innerHTML = h + " h";
    span[1].innerHTML = min + " min";
    span[2].innerHTML = sec + " sec";
    span[3].innerHTML = ms + " ms";
}

// stop() arrête le chrono et permet de recliquer sur le bouton start

function stop() {
    clearInterval(time);
    btn_start.disabled = false;
}

//  reset() stoppe le chrono en remettant les valeurs à zéro

function reset() {
    clearInterval(time);
    btn_start.disabled = false;
    ms = 0;
    sec = 0;
    min = 0;
    h = 0;

    span[0].innerHTML = h + " h";
    span[1].innerHTML = min + " min";
    span[2].innerHTML = sec + " sec";
    span[3].innerHTML = ms + " ms";
}