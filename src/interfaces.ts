import { Type } from "../node_modules/typescript/lib/typescript";

export interface Voyageur {
  idVoyageur: number;
  nom: string;
  prenom: string;
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
  voyageurId: number;  // <- ajouté
}

export interface AppData {
    //data: AppData ;
    destinations: object ;
    standing: object ;
} ; 
