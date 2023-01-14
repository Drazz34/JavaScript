document.addEventListener("DOMContentLoaded", function () {
  /* ---- Initialisation ----*/
  let ecran = document.querySelector("#ecran");
  let btn_red = document.querySelector("#red");
  let btn_blue = document.querySelector("#blue");
  let btn_green = document.querySelector("#green");
  let btn_toogle = document.querySelector("#toggle");
  let flag_toggle_black = false;
  let btn_rainbow = document.querySelector("#rainbow");
  let cursor_rainbow = 0;
  const array_rainbow = ["red", "orange", "blue", "turquoise", "violet"];
  let btn_hello = document.querySelector("#hello");
  let btn_custom = document.querySelector("#custom");
  let inpt_range = document.querySelector("#inpt_range");

  /* ---- Function --- */
  function ecran_color(color) {
    ecran.classList = color;
  }
  // Ici je n'utilise pas de fonction fléché
  // car une fonction fléché ne me permet pas d'utiliser this pour faire
  // référence à mon objet (inpt_range), dans une fonction fléché
  // this fait référence à l'objet global
  inpt_range.addEventListener("input", function (e) {
    ecran.style.borderWidth = this.value + "px";
  });
  /* ---- Event ---- */
  btn_red.addEventListener("click", function () {
    ecran_color("red");
  });
  btn_blue.addEventListener("click", function () {
    ecran_color("blue");
  });
  btn_green.addEventListener("click", function () {
    ecran_color("green");
  });
  btn_toogle.addEventListener("click", function () {
    flag_toggle_black = !flag_toggle_black;
    if (flag_toggle_black) {
      ecran_color("black");
    } else {
      ecran_color("white");
    }
  });
  btn_rainbow.addEventListener("click", function () {
    ecran_color(array_rainbow[cursor_rainbow]);
    // permet à cursor_raindow de revenir à 0 quand on arrive à la fin du tableau
    cursor_rainbow = (cursor_rainbow + 1) % array_rainbow.length;
  });

  btn_hello.addEventListener("click", function () {
    ecran.textContent = "Hello World";
  });

  btn_custom.addEventListener("click", function () {
    let input_text = document.querySelector("#custom_text");
    ecran.textContent = input_text.value;
  });
});

class Product {
  // Declaration des attributs en privé
  #id;
  #name;
  #price;
  #count;
  constructor(id, name, price) {
    this.#id = id;
    this.#name = name;
    this.#price = price;
    this.#count = 0;
  }
  getId() {
    return this.#id;
  }
  getName() {
    return this.#name;
  }
  getPrice() {
    return this.#price;
  }
  getTotalPrice() {
    return this.#price * this.#count;
  }
  getCount() {
    return this.#count;
  }
  addProduct() {
    this.#count += 1;
  }
}

let arr_li = document.querySelectorAll(".list>li");
let secondUl = document.querySelector(".secondUl");
let total = document.querySelector(".total_price");
let arr_product = []; // objet Product

/**
 * Permet de recherche dans l'array si un produit et deja présent
 * @param {String} text (text de référence)
 */
function isFound(text) {
  let arr = arr_product.find((product) => product.getName() == text);
  return typeof arr == "undefined";
}
// j'attache un event à chaque élément de ma li avec forEach
arr_li.forEach((element) => {
  element.addEventListener("click", (e) => {
    addToArray(element, arr_product);
    updateCount(element, `.secondUl>li[data-id='${element.dataset.id}']>span`);
    showTotal(total, arr_product);
  });
});

/**
 * Permet d'ajouter un élément à l'array (arr_product)
 * @param {HTMLElement} element
 */
function addToArray(element, arr) {
  // récupere de data-name de element
  let name = element.dataset.name;
  let flag = isFound(name);
  if (flag) {
    // récupére le data-price de element
    let price = element.dataset.price;
    let id = element.dataset.id;
    arr.push(new Product(id, name, price));
    showArray(secondUl, arr);
  }
}
/**
 * Permet de crée deux HTMLElement ici une li et un span puis de l'ajouter à une ul
 */
function showArray(parent, arr) {
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.classList = "cart_price";
  // l'indice de notre tableau sert d'id unique
  let indice = arr.length - 1;
  li.classList = "list-group-item";
  li.textContent = arr[indice].getName();
  li.setAttribute("data-id", arr[indice].getId());
  li.appendChild(span);
  li.appendChild(createBtn());
  parent.appendChild(li);
}
/**
 * Permet d'ajouter un élément à l'array (arr_product)
 * @param {HTMLElement} element
 * @param {String} target (cible du querySelector)
 */
function updateCount(element, target) {
  let id = element.dataset.id;
  // permet de retrouve un product via son id dans l'arr_product
  let product = arr_product.find((product) => product.getId() == id);
  product.addProduct();
  let span = document.querySelector(target);
  span.textContent =
    product.getPrice() +
    " X " +
    product.getCount() +
    " = " +
    product.getTotalPrice();
}
/**
 * Permet de crée un bouton
 * @return {HTMLElement} btn
 */
function createBtn() {
  let btn = document.createElement("button");
  btn.textContent = "X";
  btn.classList = "delete_button btn btn-danger mx-2";
  btn.addEventListener("click", (e) => {
    //on suprime le 'product' de l'array grace à filter, puis on supprime le parent
    arr_product = arr_product.filter(function (product, index, arr) {
      return product.getId() != btn.parentNode.dataset.id;
    });
    btn.parentNode.remove();
    showTotal(total, arr_product);
  });

  return btn;
}

function showTotal(total, arr) {
  let totalPrice = 0;
  arr.forEach((product) => {
    totalPrice += product.getTotalPrice();
  });
  total.textContent = totalPrice;
}
