import { Voyage } from "./Voyage.js";
import { Voyageur } from "./Voyageur.js";


export class LocalStorage{


  setInfoVoyageur(objVoyageur: Voyageur, bookingNumber: string){
    localStorage.setItem(bookingNumber, JSON.stringify(objVoyageur));
    console.log(`Voyageur : ${localStorage.getItem('Voyager')}`);
  }

/** Pour ne pas avoir deux cléfs similiares dans le local storage ajout de 
 * TRVL devant le bookingNumber pour indiqué qu'il s'agit de l'ID voyage (travel => trvl)
 */

  setInfoVoyage(objVoyage: Voyage, bookingNumber: string){
    localStorage.setItem(`TRVL-${bookingNumber}`, JSON.stringify(objVoyage));
    console.log(`Stockage voyage : ${localStorage.getItem('Voyage')}`);
  }
  }

