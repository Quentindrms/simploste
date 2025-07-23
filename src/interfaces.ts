import { Type } from "../node_modules/typescript/lib/typescript";

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
  voyageurId: number;  // <- ajouté
}

export interface AppData {
    //data: AppData ;
    destinations: object ;
    standing: object ;
} ; 
