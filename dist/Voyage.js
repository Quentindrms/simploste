import { data } from "./data.js";
export class Voyage {
    constructor(date, destination, classe) {
        this.date = date;
        this.destination = destination;
        this.classe = classe;
    }
    // METHODE DE CALCUL DU PRIX:
    calculPrix() {
        let prixAuKm = 0;
        let trajet = 0;
        const classeChoisie = document.getElementById("classe-voyage");
        const choixDeClasse = classeChoisie.value;
        for (let i = 0; i < data.standing.length; i++) {
            if (choixDeClasse === data.standing[i].value) {
                prixAuKm = data.standing[i].pricePerKm;
                break;
            }
        }
        const villeChoisie = document.getElementById("villeArrivee");
        let arrivee = villeChoisie.value;
        for (let i = 0; i < data.destinations.length; i++) {
            if (arrivee === data.destinations[i].value) {
                trajet = data.destinations[i].distanceFromParis;
                break;
            }
        }
        if (trajet === 0 || prixAuKm === 0) {
            throw new Error("trajet ou prixAuKm non défini");
        }
        const prixTotal = trajet * prixAuKm;
        return prixTotal;
    }
}
