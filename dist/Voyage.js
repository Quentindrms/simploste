export class Voyage {
    constructor(id, date, heure, destination, classe, reduc, voyageurId) {
main
        this.id = id;
        this.date = date;
        this.heure = heure;
        this.destination = destination;
        this.classe = classe;
        this.reduc = reduc;
        this.voyageurId = voyageurId;
    }
    calculPrix() {
        let prixBase;
        let classeindice = 1;
        let reduction = 1;
        let prixtotal;
        const pkm = 1;
        const distance = 1;
        let animaloption = 25;
        // Exemple de base de prix pour trajet longueur
        prixBase = distance * pkm;
        // Exemple de base de prix selon la classe:
        prixBase = prixBase * classeindice; // classe par défaut
        prixtotal = prixBase * reduction + animaloption;
        return prixtotal;
    }
}
