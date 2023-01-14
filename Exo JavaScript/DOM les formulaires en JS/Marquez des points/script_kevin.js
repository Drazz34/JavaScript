const BTN_SUBMIT = document.querySelector("#submit");
const reponse_arr = [
  "1986",
  "Koji Kondo",
  "The Wind Waker",
  "La princesse Zora",
  "900",
];

BTN_SUBMIT.addEventListener("click", (e) => {
  e.preventDefault();
  affichage(calc_score());
});
/**
 * calcule le nombre de bonne réponses
 * @returns int
 */
function calc_score() {
  // permet de cast la nodeList en tableau itérable
  let radio_checked = Array.from(document.querySelectorAll("input:checked"));
  // permet d'accumuler le score, grace a includes si on trouve dans reponse_arr
  // une des réponse, cela renvoie tru, si cela renvoi tru on ajoute 1
  // sinon on ne change rien
  // doc de reduce : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  let found = radio_checked.reduce(
  // acc = accumulateur
    (acc, e) => (reponse_arr.includes(e.value) ? 1 + acc : acc),
    0
  );
  return found;
}
/**
 * Affiche le score
 * @param {int} score
 */
function affichage(score) {
  const h2 = document.querySelector("h2");
  h2.textContent = "Votre score est de : " + score;
}
