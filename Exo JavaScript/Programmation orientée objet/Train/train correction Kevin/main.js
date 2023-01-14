class Train {
  constructor(
    vitesseMax,
    tauxAcc,
    ouverturePortes,
    vitesseActuelle,
    tauxFrein,
    nbPassagers,
    gareActuelle,
    itineraire
  ) {
    this.vitesseMax = vitesseMax; // 150km/h

    this.tauxAcc = tauxAcc; // 10km/h

    this.tauxFrein = tauxFrein; // 10km/h

    this.ouverturePortes = ouverturePortes; // False

    this.vitesseActuelle = vitesseActuelle; //0 km/h

    this.nbPassagers = nbPassagers; // 0

    this.gareActuelle = gareActuelle; //index de l'array itineraire

    this.itineraire = itineraire; // Array de gares
    this.nom = "";
  }

  setNom(nom) {
    this.nom = nom;
  }

  accelere(boutonAppuye) {
    this.vitesseActuelle += this.tauxAcc * boutonAppuye;

    if (this.vitesseActuelle > this.vitesseMax) {
      this.vitesseActuelle = this.vitesseMax;
    }

    console.log(`La vitesse actuelle est de ${this.vitesseActuelle}Km/h`);

    console.log("Tchoo Tchoo");
  }

  freine(nbFrein) {
    this.vitesseActuelle -= this.tauxFrein * nbFrein;

    console.log(`La vitesse actuelle est de ${this.vitesseActuelle}Km/h`);
  }

  getEtatPorte() {
    return this.ouverturePortes;
  }
  ouvrePortes() {
    this.ouverturePortes = true;
    console.log("Les portes sont ouvertes");
  }
  fermePortes() {
    this.ouverturePortes = false;

    console.log("Les portes sont fermées");
  }

  monteesDescentes(montees, descentes) {
    if (this.ouverturePortes) {
      this.nbPassagers += montees;

      this.nbPassagers -= descentes;
    }

    console.log(
      `${montees} sont montés, ${descentes} sont descendus, il y a ${this.nbPassagers} personnes dans ce train`
    );
  }

  quitterGare() {
    this.fermePortes();

    console.log("Le train demarre, eloignez vous des quais svp");
  }

  arriveeEnGare() {
    this.gareActuelle++;

    console.log(
      `Le train est arrivé en gare de ${this.itineraire[this.gareActuelle]}`
    );
  }
}

function demarre(train) {
  train.ouvrePortes();

  train.monteesDescentes(125, 0);

  train.fermePortes();

  train.quitterGare();

  train.accelere(15);

  console.log("Une vache sauvage apparait, vite, il faut freiner");

  train.freine(15);

  console.log("La vache a peur, elle se part");

  train.accelere(15);

  train.freine(0);

  train.freine(2);

  train.freine(3);

  train.freine(2);

  train.freine(2);

  train.freine(3);

  train.freine(2.5);

  train.freine(0.5);

  train.arriveeEnGare();

  train.ouvrePortes();

  train.monteesDescentes(100, 95);

  train.fermePortes();
}
let itin = ["Montpellier", "Lyon", "Paris"];
let create_train = document.querySelector("#create-train");
let trains = [];
let radio_c = document.querySelector("#c");
let radio_d = document.querySelector("#d");
let btn_b = document.querySelector("#btn-b");
create_train.addEventListener("click", (e) => {
  e.preventDefault();
  while (trains.length < 2) {
    let train = new Train(150, 10, false, 0, 10, 0, 0, itin);
    trains.push(train);
  }
  console.log(trains);
});

btn_b.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(radio_c.checked, radio_d.checked);
  if (radio_c.checked) {
    alert("nommez vos trains");
    let nom_train1 = prompt("nommez le train n°1");
    let nom_train2 = prompt("nommez le train n°2");
    trains[0].setNom(nom_train1);
    trains[1].setNom(nom_train2);
    console.log(trains);
  } else {
    let numero_train = parseInt(prompt("numéro du train à demarer"));
    if (
      numero_train == 0 ||
      numero_train > trains.length ||
      isNaN(numero_train)
    ) {
      console.error("erreur");
    } else {
      demarre(trains[numero_train - 1]);
    }
  }
});
