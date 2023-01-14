class Chien {
    quantite = 0;
    constructor(nom, age, race, aboie) {
        this.nom = nom;
        this.age = age;
        this.race = race;
        this.aboie = aboie;
    }
    ouaf() {
        return this.aboie;
    }
    nourrit(viande) {
        this.quantite += viande;
        return this.quantite;
    }
}

let medor = new Chien("Médor", "3 ans", "Berger allemand", "WOUF !!!");
console.log(medor);

let kiki = new Chien("Kiki", "4 mois", "Samoyède", "Waff !");
console.log(kiki);

let btn_medor = document.querySelector(".medor");

btn_medor.addEventListener("click", e => {
    alert(`${medor.nom} fait : ${medor.aboie}`);
});

let btn_kiki = document.querySelector(".kiki");

btn_kiki.addEventListener("click", e => {
    alert(`${kiki.nom} fait : ${kiki.aboie}`);
});

console.log(medor.ouaf());
console.log(medor.nourrit(5));
console.log(medor.nourrit(10));


// ------------------------- CORRECTION -----------------------------------

// class Chien {
//     quant = 0;
//     constructor(nom, age, race) {
//         this.nom = nom;  /* pour faire correspondre l'attribut au paramètre. */
//         this.age = age;
//         this.race = race;
//     }

//     wouaf(aboie) {
//         return aboie;
//     }

//     mange(quantite) {
//         this.quant += quantite;
//     }
//     total() {
//         return this.quant;
//     }
// }

// let chien1 = new Chien("Youki", 4, "berger malinois");
// console.log(chien1);
// console.log(chien1.wouaf("Ouaf !!!"));

// chien1.mange(2);
// chien1.mange(5);
// chien1.mange(3);
// console.log(chien1.total());