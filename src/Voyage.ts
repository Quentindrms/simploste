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

 calculPrix(): number {
     const classeChoisie = document.getElementById('classe-voyage') as HTMLSelectElement;
     let prixAuKm: number = -1;
         if (classeChoisie.value === "economy" ) {
             prixAuKm = 0.1;
         };
           if (classeChoisie.value === "business" ) {
             prixAuKm = 0.25;
         };
           if (classeChoisie.value === "first" ) {
             prixAuKm = 0.1;
         };
     const villeChoisie = document.getElementById('villeArrivee') as HTMLSelectElement;
     const ville  = villeChoisie.value;
     let trajet: number = -1;
     if ( ville === "paris") {
        trajet = 0 };
     if ( ville === "london") {
        trajet = 340 };
     if ( ville === "berlin") {
        trajet = 1050 };
     if ( ville === "madrid") {
        trajet = 1250 };
     if ( ville === "rome") {
        trajet = 1100 };
     if ( ville === "lisbon") {
        trajet = 1450 };
     if ( ville === "vienna"){
        trajet = 1230 };
     if ( ville === "amsterdam") {
        trajet = 510 };
     if ( ville === "brussels") {
        trajet = 300 };
     if ( ville === "copenhagen") {
        trajet = 1380 };
     
    if (trajet === -1 || prixAuKm === -1) {
  throw new Error("trajet ou prixAuKm non défini");
}
     const prixTotal = trajet * prixAuKm
  return prixTotal
}
}



   
