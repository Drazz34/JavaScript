
// attrapez les input checked en faire un tableau selector all input checked si < 2 rien si < 5 rien si + de 5 fait plus rien


let input_array = document.querySelectorAll("input");

input_array.forEach(element => {
    element.addEventListener("click", e => {
        if (document.querySelectorAll("input:checked").length > 5) {
            element.checked = false;
        }
    })
});
