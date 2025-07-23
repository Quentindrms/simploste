import  "./data.js";

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

  calculPrix(): number {
    
    let prixBase: number;
    let classeIndice: number = 1 ;
    let reduction: number = 1;
    let prixTotal: number; 
    const priceKm: number[] = [0.1, 0.25, 0.5];
    const distance: number = 1;
    let animal: number = 0;
    let animalOption: number = 25
    //prix pour trajet longueur
    prixBase = distance * priceKm[classeIndice] * classeIndice


    //prix selon la classe:
    
      prixBase = prixBase * classeIndice; // classe vale a 1 par defaut;D
    
    prixTotal = distance * prixBase * reduction + animal * animalOption;
    return prixTotal
    
  }

  

}

   
