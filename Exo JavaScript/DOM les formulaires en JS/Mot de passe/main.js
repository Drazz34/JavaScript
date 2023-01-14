
// fonction calculant la force du mdp
function force_mdp(mdp) {
    let n = 0;

    if(mdp.length < 8) {
        alert("Mot de passe trop court (8 caractères min.)");
    } else if(mdp.length >= 8) {
        n += 20;
    }
    if(/[0-9]/.test(mdp)) {
        n += 10;
    }
    if(/[a-z]/.test(mdp)) {
        n += 26;
    }
    if(/[A-Z]/.test(mdp)) {
        n += 26;
    }
    if(/[&,?;.:/!§ù%^¨$£*-+()"_@{}#=]/.test(mdp)) {
        n += 28;
    }
    return n;
}

// fonction utilisée
password.addEventListener("blur", e => {
    let password = document.querySelector("#password").value;
    let rep_force = document.querySelector("#force");
    rep_force.textContent = "Force de votre mot de passe : ";
    let force = force_mdp(password);

    if(force < 104) {
        rep_force.textContent += " Mot de passe pas assez sécurisé, recommencez.";
    } else {
        rep_force.textContent += " Ok !";
    }
    console.log(force);
})