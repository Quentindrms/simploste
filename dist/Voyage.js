import "data";
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
        chems_feature_1
        const priceKm = [0.1, 0.25, 0.5];
        const distance = 1;
        let animal = 0;
        let animalOption = 25;
        //prix pour trajet longueur
        prixBase = distance * priceKm[classeIndice] * classeIndice;
        //prix selon la classe:
        prixBase = prixBase * classeIndice; // classe vale a 1 par defaut;D
        prixTotal = distance * prixBase * reduction + animal * animalOption;
        return prixTotal;
    }
}
