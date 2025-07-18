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
    let classeIndice: number = 1;
    let reduction: number = 1;
    let prixTotal: number; 
    const prixKm: number = 1;
    const distance: number = 1;
    let animalOption: number = 25
    // Exemple de base de prix pour trajet longueur
    prixBase = distance * prixKm 


    // Exemple de base de prix selon la classe:
    
      prixBase = prixBase * classeIndice; // classe par défaut
    
    prixTotal = prixBase * reduction + animalOption;
    return prixTotal

    
  }

   // FORMULE LOGIQUE DE CALCUL PRIX CF MIND MAP
  //  calcul price ( nbre voy X (prixtajet) X reduc X coefclasse
//si present) + options ( animal,...)   
   // return 0;

}

   
