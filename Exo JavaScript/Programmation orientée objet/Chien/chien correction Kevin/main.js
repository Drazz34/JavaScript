class Toutou {
  constructor(nom, age, race, aboie) {
    this.nom = nom;
    this.age = age;
    this.race = race;
    this.aboie = aboie;
    this.qtxtotal = 0;
  }
  affiche() {
    console.log(
      "Ce chien s'appele " +
        this.nom +
        ", il a " +
        this.age +
        " c'est un " +
        this.race +
        " "
    );
  }
  mange(qtx) {
    this.qtxtotal = this.qtxtotal + qtx;
    console.log("Il mange :" + qtx);
  }
  afficheMange() {
    console.log("Ce Toutou a mangé " + this.qtxtotal + " grammes par jour");
  }
  toutouAboie() {
    console.log("Le chien fait " + this.aboie + "");
  }
  // exemple de getter et setter
  setNom(nom) {
    this.nom = nom;
  }
  getNom() {
    return this.nom;
  }
  setQtxTotal(qtx) {
    this.qtxtotal += qtx;
  }
  getQtxTotal() {
    return this.qtxtotal;
  }
}

let Toutou_1 = new Toutou("Georges", "5 ans", "Pintsher", "wouarfffff");
let Toutou_2 = new Toutou("Irène", "2 ans", "Bouledogue Français", "arf");

Toutou_1.affiche();
Toutou_1.mange(2);
Toutou_1.mange(3);
Toutou_1.afficheMange();
Toutou_1.toutouAboie();
