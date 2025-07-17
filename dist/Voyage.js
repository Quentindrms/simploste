export class Voyage {
    constructor(id, date, heure, destination, classe, reduc, voyageurId // <- ajouté
    ) {
        this.id = id;
        this.date = date;
        this.heure = heure;
        this.destination = destination;
        this.classe = classe;
        this.reduc = reduc;
        this.voyageurId = voyageurId; // <- assigné
    }
    calculPrix() {
        // FORMULE LOGIQUE DE CALCUL PRIX CF MIND MAP
        return 0;
    }
}
