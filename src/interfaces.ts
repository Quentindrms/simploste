// Plus d'import inutile, ajout des interfaces Destination et Standings:

export interface Voyageur {
  idVoyageur: number;
  userForename: string;
  userName: string;
  dateNaissance: string;
  email: string;
  telephone: string;
  travelAlone: string;
}

export interface Voyage {
  idVoyage: number;
  date: string;
  heure: string;
  destination: string;
  classe: string;
  reduc: boolean;
  idVoyageur: number;
}

export interface AppData {
    //data: AppData ;
    destinations: object ;
    standing: object ;
}

    destinations: Destination[] ;
    standing: Standing[] ;
} ; 


// Ajout interfaces Destination et Standings pour utilisation dans fonction calcul prix dans voyage.ts
export interface Destination {
  label: string;
  value: string;
  distanceFromParis: number;
}

export interface Standing {
  label: string;
  value: string;
  pricePerKm: number;
  perks: string[];
}

