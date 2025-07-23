import { data } from './data';

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


  // Methode calcul de prix
  
  calculPrix(): number {
   const selectedDestination = data.destinations.find(
  (d) => d.value.toLowerCase() === this.destination.toLowerCase()
);

    if (!selectedDestination) {
      console.error("Destination inconnue !");
      return 0;
    }

    const distance = selectedDestination.distanceFromParis;

    const priceKm = [0.1, 0.25, 0.5];
    let classeIndice = 1;
    if (this.classe === "eco") classeIndice = 0;
    else if (this.classe === "first") classeIndice = 2;

    const reduction = this.reduc ? 0.8 : 1; // -20% si reduc
    const animal = 0; // tu peux passer ça plus tard
    const animalOption = 25;

    const prixBase = distance * priceKm[classeIndice];
    const prixTotal = prixBase * reduction + animal * animalOption;

    return prixTotal;
  }
}




   
