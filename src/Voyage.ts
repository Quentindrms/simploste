import  "./data.js";
import { data } from "./data.js";

export class Voyage {
  date: string;
  destination: string;
  classe: string;

  constructor(
    date: string,
    destination: string,
    classe: string,
  ) {
    this.date = date;
    this.destination = destination;
    this.classe = classe;
  }

  // METHODE DE CALCUL DU PRIX:

 calculPrix(distanceFromParis: number, pricePerKm: number): number {
     const distance = (data.destinations[distanceFromParis].distanceFromParis);
     const prixAuKm = (data.standing[pricePerKm].pricePerKm);
     if (!data.destinations[distanceFromParis] || !data.standing[pricePerKm]) {
        throw new Error("Indice invalide");
     }
     const prixTotal = distance * prixAuKm
  return prixTotal
}
}



   
