let btn = document.querySelector(".btn");

btn.addEventListener("click", e => {
    alert("Hello World");
    let monPrompt = prompt("Entrez votre prénom");
    let confirmation = confirm("Êtes-vous sûr ?");
    if (confirmation) {
        alert(`Votre prénom est : ${monPrompt}`);
    }
});