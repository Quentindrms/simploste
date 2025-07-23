// Les Interfaces de grenouilles:

export interface Voyageur {
  idVoyageur: number;
  nom: string;
  prenom: string;
  dateNaissance?: Date;
  email: string;
  telephone: string;
}

export interface Voyage {
  idVoyage: number;
  date: string;
  heure: string;
  destination: string;
  classe: string;
  reduc: boolean;
  voyageurId: number;
}

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

export interface AppData {
  destinations: Destination[];
  standing: Standing[];
}

