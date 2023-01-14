function Voiture(marque, modele, annee, cylindree, couleur) {
    this.marque = marque;
    this.modele = modele;
    this.annee = annee;
    this.cylindree = cylindree;
    this.couleur = couleur;
}

let maVoiture = new Voiture("Audi", "Q5", 2012, "177cv", "blanche");

let maProchaineVoiture = new Voiture("Lamborghini", "Huracan Evo Spider", 2022, "640cv", "verte");

let sinonCelleLa = new Voiture("Porsche", "911 GT3 RS", 2022, "525cv", "bleu");

alert("Ma voiture est une " + maVoiture.marque + " " + maVoiture.modele + " de " + maVoiture.annee + 
". " + "Elle fait " + maVoiture.cylindree + " et elle est de couleur " + maVoiture.couleur + ".");