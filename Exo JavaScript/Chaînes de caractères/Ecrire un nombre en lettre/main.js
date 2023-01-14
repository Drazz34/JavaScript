let nombre_chiffre = document.querySelector(".nombre");
let btn_convertir = document.querySelector(".convertir");
btn_convertir.addEventListener("click", e => {
    let valeur = convertir(parseInt(nombre_chiffre.value));
    // if(valeur.indexOf("-zéro") > 0) {
    //     valeur = valeur.slice(0, valeur.lastIndexOf("-"));
    // }
    valeur = valeur.indexOf("-zéro") > 0 ? valeur = valeur.replace("-zéro", "") : valeur ;
        alert(valeur);
    // console.log(valeur);
});

function unite(nombre) {
    let unite;
    switch (nombre) {
        case 1:
            unite = "un";
            break;
        case 2:
            unite = "deux";
            break;
        case 3:
            unite = "trois";
            break;
        case 4:
            unite = "quatre";
            break;
        case 5:
            unite = "cinq";
            break;
        case 6:
            unite = "six";
            break;
        case 7:
            unite = "sept";
            break;
        case 8:
            unite = "huit";
            break;
        case 9:
            unite = "neuf";
            break;
        default:
            unite = "Non reconnu";
            break;
    }
    return unite;
}
// console.log(unite);

function famille_dix(nombre) {
    let famille_dix;
    switch (nombre) {
        case 10:
            famille_dix = "dix";
            break;
        case 11:
            famille_dix = "onze";
            break;
        case 12:
            famille_dix = "douze";
            break;
        case 13:
            famille_dix = "treize";
            break;
        case 14:
            famille_dix = "quatorze";
            break;
        case 15:
            famille_dix = "quinze";
            break;
        case 16:
            famille_dix = "seize";
            break;
        case 17:
            famille_dix = "dix-sept";
            break;
        case 18:
            famille_dix = "dix-huit";
            break;
        case 19:
            famille_dix = "dix-neuf";
            break;
        default:
            unite = "Non reconnu";
            break;
    }
    return famille_dix;
}
// console.log(famille_dix);

function dizaine(nombre) {
    let dizaine;
    switch (nombre) {
        case 20:
            dizaine = "vingt";
            break;
        case 30:
            dizaine = "trente";
            break;
        case 40:
            dizaine = "quarante";
            break;
        case 50:
            dizaine = "cinquante";
            break;
        case 60:
            dizaine = "soixante";
            break;
        case 80:
            dizaine = "quatre-vingt";
            break;
        default:
            dizaine = "Non reconnu";
            break;
    }
    return dizaine;
}
// console.log(dizaine);

function cent_et_mille(nombre) {
    let cent_et_mille;
    switch (nombre) {
        case 100:
            cent_et_mille = "cent";
            break;
        case 1000:
            cent_et_mille = "mille";
            break;
        default:
            cent_et_mille = "Non reconnu";
            break;
    }
    return cent_et_mille;
}
// console.log(cent_et_mille);

function convertir(valeur) {
    if (valeur == 0) {
        return "zéro";
    } else if(valeur > 0 && valeur <= 9) {
         return unite(valeur);
    } else if(valeur >= 10 && valeur <= 19) {
        return famille_dix(valeur);
    } else if (valeur == 20) {
        return dizaine(20);
    } else if (valeur == 21) {
        return dizaine(20) + " et " + unite(1);
    } else if (valeur > 21 && valeur <= 29) {
        return dizaine(20) + "-" + convertir(valeur % 20); 
    } else if (valeur == 30) {
        return dizaine(30);
    } else if (valeur == 31) {
        return dizaine(30) + " et " + unite(1);
    } else if (valeur > 31 && valeur <= 39) {
        return dizaine(30) + "-" + convertir(valeur % 30); 
    } else if (valeur == 40) {
        return dizaine(40);
    } else if (valeur == 41) {
        return dizaine(40) + " et " + unite(1);
    } else if (valeur > 41 && valeur <= 49) {
        return dizaine(40) + "-" + convertir(valeur % 40); 
    } else if (valeur == 50) {
        return dizaine(50);
    } else if (valeur == 51) {
        return dizaine(50) + " et " + unite(1);
    } else if (valeur > 51 && valeur <= 59) {
        return dizaine(50) + "-" + convertir(valeur % 50); 
    } else if (valeur == 60) {
        return dizaine(60);
    } else if (valeur == 61) {
        return dizaine(60) + " et " + unite(1);
    } else if (valeur > 61 && valeur <= 69) {
        return dizaine(60) + "-" + convertir(valeur % 60); 
    } else if (valeur == 70) {
        return dizaine(60) + "-" + convertir(valeur % 60);
    } else if (valeur == 71) {
        return dizaine(60) + " et " + convertir(valeur % 60);
    } else if (valeur > 71 && valeur <= 79 ) {
        return dizaine(60) + "-" + convertir(valeur % 60);
    } else if (valeur == 80) {
        return dizaine(80);
    } else if (valeur > 80 && valeur <= 89) {
        return dizaine(80) + "-" + convertir(valeur % 80);
    } else if (valeur == 90) {
        return dizaine(80) + "-" + convertir(valeur % 80);
    } else if (valeur > 90 && valeur <= 99) {
        return dizaine(80) + "-" + convertir(valeur % 80);
    } else if (valeur == 100) {
        return cent_et_mille(100);
    } else if (valeur > 100 && valeur <= 199) {
        return cent_et_mille(100) + "-" + convertir(valeur % 100);
    } else if (valeur >= 200 && valeur <= 999) {
        return convertir(Math.floor(valeur / 100)) + "-" + cent_et_mille(100) + "-" + convertir(valeur % 100);
    } else if (valeur == 1000) {
        return cent_et_mille(1000);
    } else if (valeur > 1000 && valeur <= 1999) {
        return cent_et_mille(1000) + "-" + convertir(valeur % 1000);
    } else if(valeur = 2000 ) {
        return "deux-mille";
    }
}

for (let i = 0; i <= 2000; i++) {
    console.log(convertir(i));  
}