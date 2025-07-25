import "./data.js";
import { data } from "./data.js";
export class Voyage {
    constructor(date, destination, classe) {
        this.date = date;
        this.destination = destination;
        this.classe = classe;
    }
    // METHODE DE CALCUL DU PRIX:
    calculPrix(distanceFromParis, pricePerKm) {
        const distance = (data.destinations[distanceFromParis].distanceFromParis);
        const prixAuKm = (data.standing[pricePerKm].pricePerKm);
        if (!data.destinations[distanceFromParis] || !data.standing[pricePerKm]) {
            throw new Error("Indice invalide");
        }
        const prixTotal = distance * prixAuKm;
        return prixTotal;
    }
}
