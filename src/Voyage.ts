export class Voyage {
  id: number;
  date: string;
  heure: string;
  destination: string;
  classe: string;
  reduc: boolean;
  voyageurId: number;

  constructor(
    id: number,
    date: string,
    heure: string,
    destination: string,
    classe: string,
    reduc: boolean,
    voyageurId: number
  ) {
    this.id = id;
    this.date = date;
    this.heure = heure;
    this.destination = destination;
    this.classe = classe;
    this.reduc = reduc;
    this.voyageurId = voyageurId;
  }

  calculPrix(): number {
    let prixBase: number;
    let classeindice: number = 1;
    let reduction: number = 1;
    let prixtotal: number; 
    const pkm: number = 1;
    const distance: number = 1;
    let animaloption: number = 25
    // Exemple de base de prix pour trajet longueur
    prixBase = distance * pkm 


    // Exemple de base de prix selon la classe:
    
      prixBase = prixBase * classeindice; // classe par défaut
    
    prixtotal = prixBase * reduction + animaloption;
    return prixtotal

    
  }

   // FORMULE LOGIQUE DE CALCUL PRIX CF MIND MAP
  //  calcul price ( nbre voy X (prixtajet) X reduc X coefclasse
//si present) + options ( animal,...)   
   // return 0;

}

   
