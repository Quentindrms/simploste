import  "./data.js";
import { data } from "./data.js";

export class Voyage {
  idVoyage: number;
  date: string;
  heure: string;
  destination: string;
  classe: string;
  reduc: boolean;
  idVoyageur: number;

  constructor(
    idVoyage: number,
    date: string,
    heure: string,
    destination: string,
    classe: string,
    reduc: boolean,
    idVoyageur: number
  ) {
    this.idVoyage = idVoyage;
    this.date = date;
    this.heure = heure;
    this.destination = destination;
    this.classe = classe;
    this.reduc = reduc;
    this.idVoyageur = idVoyageur;
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



   
