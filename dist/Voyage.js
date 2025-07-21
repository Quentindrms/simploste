export class Voyage {
    constructor(idVoyage, date, heure, destination, classe, reduc, idVoyageur) {
        this.idVoyage = idVoyage;
        this.date = date;
        this.heure = heure;
        this.destination = destination;
        this.classe = classe;
        this.reduc = reduc;
        this.idVoyageur = idVoyageur;
    }
    calculPrix() {
        let prixBase;
        let classeIndice = 1;
        let reduction = 1;
        let prixTotal;
        const prixKm = 1;
        const distance = 1;
        let animalOption = 25;
        // Exemple de base de prix pour trajet longueur
        prixBase = distance * prixKm;
        // Exemple de base de prix selon la classe:
        prixBase = prixBase * classeIndice; // classe par défaut
        prixTotal = prixBase * reduction + animalOption;
        return prixTotal;
    }
}
