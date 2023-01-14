let btn_slide = document.querySelector("#slider");
let changeCouleur = document.querySelector(".objet");
let btnHello = document.querySelector("#btn_hello");
let inputTextArea = document.querySelector("#text_custom");
let btnAddTextCustom = document.querySelector("#btn_text_custom");
let bool = true;
let i = 0;

document.querySelector(".button_red").addEventListener("click", (e) => {
  e.preventDefault();
  redButton();
});
document.querySelector(".button_blue").addEventListener("click", (e) => {
  e.preventDefault();
  blueButton();
});
document.querySelector(".button_green").addEventListener("click", (e) => {
  e.preventDefault();
  greenButton();
});
document.querySelector(".button_toggle").addEventListener("click", (e) => {
  e.preventDefault();
  toggleButton();
});
document.querySelector(".button-rainbow").addEventListener("click", (e) => {
  e.preventDefault();
  rainbow();
});
btn_slide.addEventListener("input", (e) => {
  e.preventDefault();
  slide(btn_slide.value);
});

btnAddTextCustom.addEventListener("click", (e) => {
  inputText(inputTextArea.value);
});

btnHello.addEventListener("click", (e) => {
  inputText("Hello World");
});

function redButton() {
  changeCouleur.classList = "objet red";
}
function greenButton() {
  changeCouleur.classList = "objet green";
}
function blueButton() {
  changeCouleur.classList = "objet blue";
}
function toggleButton() {
  if (bool) {
    changeCouleur.className = "objet";
    bool = false;
  } else {
    changeCouleur.className = "objet black";
    bool = true;
  }
}
/**
 * Change la class de changeCouleur en fonction de i
 */
function rainbow() {
  let tab = ["red", "green", "blue", "purple", "pink", "orange"];
  changeCouleur.className = "objet col-6 " + tab[i];
  i++;
  if (i > tab.length) {
    i = 0;
  }
}
/**
 * Permet de modifier la "border" de changeCouleur
 * @param {Number} value
 */
function slide(value) {
  changeCouleur.style.border = value + "px solid black";
}

function inputText(text) {
  changeCouleur.textContent = text;
}
