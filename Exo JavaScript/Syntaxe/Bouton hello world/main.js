// function hello_world () {
//     alert("Hello World");
//     }
// 
// Equivaut à :

let btn_bonjour = document.querySelector(".btn_bonjour");
btn_bonjour.addEventListener("click", e => {
    console.log(e);
    alert("Hello World");
});

// le e est un paramètre de la fonction déclarée par le => {}, on le voit avec le console.log