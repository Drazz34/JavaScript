let div_change = document.querySelector(".contain");

let btn_red = document.querySelector("#red");
let btn_green = document.querySelector("#green");
let btn_blue = document.querySelector("#blue");
let btn_toggle = document.querySelector("#toggle");
let btn_rainbow = document.querySelector("#rainbow");
let btn_hello = document.querySelector("#hello");
let btn_bouton = document.querySelector("#bouton");


btn_red.addEventListener("click", e => {
    div_change.style.backgroundColor = "red";
    indic = 1;
})

btn_green.addEventListener("click", e => {
    div_change.style.backgroundColor = "green";
    indic = 1;
})

btn_blue.addEventListener("click", e => {
    div_change.style.backgroundColor = "blue";
    indic = 1;
})

let indic = 0;

btn_toggle.addEventListener("click", e => {
    if(indic == 0) {
        div_change.style.backgroundColor = "black";
        div_change.style.color = "white";
        indic = 1;
    } else {
        div_change.style.backgroundColor = "white";
        div_change.style.color = "black";
        indic = 0;
    }
})

// btn_toggle.addEventListener("click", e => {
//     div_change.classList.toggle("white"); 
//     div_change.classList.toggle("black");
// })

let rainbow = 0;

btn_rainbow.addEventListener("click", e => {
    if (rainbow == 0) {
        div_change.style.backgroundColor = "red";
        rainbow = 1;
    } else if (rainbow == 1) {
        div_change.style.backgroundColor = "orange";
        rainbow = 2;
    } else if (rainbow == 2) {
        div_change.style.backgroundColor = "yellow";
        rainbow = 3;
    } else if (rainbow == 3) {
        div_change.style.backgroundColor = "green";
        rainbow = 4;
    } else if (rainbow == 4) {
        div_change.style.backgroundColor = "turquoise";
        rainbow = 5;
    } else if (rainbow == 5) {
        div_change.style.backgroundColor = "blue";
        rainbow = 6;
    } else {
        div_change.style.backgroundColor = "violet";
        rainbow = 0;
    }  
})

// faire le rainbow avec les modulos

let range = document.querySelector("#range");

range.addEventListener("input", e => {
    div_change.style.border = range.value + "px solid black";
})

btn_hello.addEventListener("click", e => {
    div_change.insertAdjacentText("afterbegin", "Hello World");
})

btn_bouton.addEventListener("click", e => {
    let contenu = document.querySelector("#text").value;
    div_change.insertAdjacentText("beforeend", contenu);
})