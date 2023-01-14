let arr_li = document.querySelectorAll("#js_liste li");
let panier = document.querySelector(".js_panier");
let container = document.querySelector(".container");
let show = document.createElement("div");
container.appendChild(show);

arr_li.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(li.dataset.price);
    let flag = isFound(li.textContent);
    if (!flag) {
      create_li(panier, li);
    } else {
      li.dataset.count++;
      document.querySelector("#" + li.textContent).textContent =
        li.dataset.count +
        " x " +
        li.dataset.price +
        " = " +
        li.dataset.count * li.dataset.price +
        "€";
    }
    showTotal();
  });
});

function create_li(parent, node) {
  let nouvelle_li = document.createElement("li");
  nouvelle_li.classList = "list-group-item";
  let span = document.createElement("span");
  span.setAttribute("id", node.textContent);
  nouvelle_li.textContent = node.textContent;
  node.setAttribute("data-count", 1);
  span.textContent =
    node.dataset.count +
    " x " +
    node.dataset.price +
    " = " +
    node.dataset.count * node.dataset.price +
    "€";
  nouvelle_li.appendChild(span);
  nouvelle_li.appendChild(removeBtn(node));
  parent.appendChild(nouvelle_li);
}

function isFound(fruit) {
  let li_panier = document.querySelectorAll(".js_panier li");
  let test = false;
  for (let index = 0; index < li_panier.length; index++) {
    const element = li_panier[index];
    if (element.firstChild.textContent == fruit) {
      test = true;
    }
  }
  return test;
}

function removeBtn(node) {
  let button = document.createElement("button");
  button.textContent = "X";
  button.addEventListener("click", (e) => {
    node.dataset.count = 0;
    showTotal();
    button.parentNode.remove();
  });
  return button;
}

function totalPrice() {
  let listProduct = document.querySelectorAll("#js_liste li");
  let total = 0;
  listProduct.forEach((element) => {
    total +=
      parseFloat(element.dataset.count) * parseFloat(element.dataset.price);
  });
  return total;
}

function showTotal() {
  show.textContent =
    "le prix total de votre panier est de :  " + totalPrice() + " € ";
}
