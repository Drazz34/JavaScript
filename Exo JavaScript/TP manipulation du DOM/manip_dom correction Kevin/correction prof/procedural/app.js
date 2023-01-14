// ------------------------Variables Initialisation

// ------------------------Fonctions

/**
 * Récupére le compteur et le met à jour
 * @param {Number} id
 * @return {Number} count
 */
function updateCount(id) {
  const li = document.querySelector(`.list > li[data-id="${id}"]`);
  const count = parseInt(li.dataset.count);
  //Met à jour le compteur dans la list afin de me basé dessus lors de la suppression/incrémentation
  li.setAttribute("data-count", count + 1);
  return count + 1;
}
/**
 * Crée l'element html qui contient le détail
 * @param {HTMLElement} element
 * @param {String} type
 * @param {Number} count
 * @param {Number} id
 * @return {Array} [item,obj]
 */
function createDetails(element, type, count, id) {
  //Récupére les informations stocké dans les data-
  const price = parseInt(element.dataset.price);
  const total = count * price;
  const item = document.createElement(type);

  //Attribue les informations au nouvel element créé
  item.setAttribute("data-id", id);
  item.setAttribute("data-price", price);
  item.setAttribute("data-total", total);
  item.textContent = `${capitalize(
    element.dataset.name
  )} ${count} x ${price}€ = ${count * price}€`;

  //Renvoie la ref d'item et les informations stockées dans un objet
  return item;
}

/**
 * Créé une div qui contient l'element html détail + son button suppréssion
 * @param {HTMLElement} refProduct (createDetails)
 * @param {Number} id
 * @return {HTMLElement}
 */
function createRow(refProduct, id) {
  let refDiv = document.createElement("div");
  let refBtn = document.createElement("button");
  refDiv.className = "row-product";
  refBtn.textContent = "X";
  refBtn.className = "btn";
  refBtn.addEventListener("click", () => {
    //Récupére la ref du li qui nous aide à garder en mémoire les informations
    //Et remet le compteur à 0 suite à la suppression de l'item dans le panier
    const li = document.querySelector(`.list > li[data-id="${id}"]`);
    // sans es6
    // const li = document.querySelector(".list > li[data-id='" + id + "']");

    li.setAttribute("data-count", 0);
    //Supprime l'element du DOM
    refDiv.remove();
    //on oublie pas de d'appeler refreshTotal au lancement du click
    refreshTotal();
  });
  refDiv.appendChild(refProduct);
  refDiv.appendChild(refBtn);
  return refDiv;
}

/**
 * Met à jour le total présent dans le DOM
 */
function refreshTotal() {
  const refTotal = document.querySelector(".total");
  const arrList = Array.from(document.querySelectorAll(".row-product > li"));

  //Si aucun li trouvé dans le panier
  if (!arrList || arrList.length == 0) {
    refTotal.innerHTML = "0€";
    //On ne va pas plus loin dans la fonction
    return null;
  }

  //Calcule le total
  const nbTotal = arrList.reduce(
    (acc, curr) => acc + parseInt(curr.dataset.total),
    0
  );
  refTotal.innerHTML = nbTotal + "€";
}

/**
 * Met en majuscule, le premier element d'une chaine de caractères.
 * @param {string} param
 * @return {string}
 */
function capitalize([first, ...rest]) {
  return first.toUpperCase() + rest.join("");
}

// Chargement du DOM
document.addEventListener("DOMContentLoaded", function () {
  const refListLi = Array.from(document.querySelectorAll(".list > li"));
  const refCart = document.querySelector(".cart");

  refListLi.forEach((li) => {
    li.addEventListener("click", () => {
      //Stock dans une variable, l'identifiant de mon item clické contenu dans data-id
      const id = li.dataset.id;
      //Récupére le compteur à jour
      const count = updateCount(id);

      //Crée mes deux elements HTML qui iront dans Panier
      const refLi = createDetails(li, "li", count, id);
      const refDiv = createRow(refLi, id);

      //Regarde si des références existe dans panier
      //(convertis la nodelist renvoyer par querySelectorAll en Array afin de pouvoir appliquer des méthodes de tableau comme find)
      const refListLi = Array.from(refCart.querySelectorAll("div > li"));
      const refFound = refListLi.find((el) => el.dataset.id == id);
      //Si une référence est trouvé, alors on doit remplacer l'ancien element par le nouveau
      if (refFound) {
        refCart.replaceChild(refDiv, refFound.parentElement);
      } else {
        //Sinon insère dans le DOM l'element crée
        refCart.appendChild(refDiv);
      }

      //Une fois les modifications du DOM faites. Met à jour le total
      refreshTotal();
    });
  });
});
