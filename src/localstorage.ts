import { Voyage } from "./Voyage.js";
import { Voyageur } from "./Voyageur.js";



export class LocalStorage{


  setInfoVoyageur(objVoyageur: Voyageur){
    localStorage.setItem('Voyager', JSON.stringify(objVoyageur));
    console.log(`Voyageur : ${localStorage.getItem('Voyager')}`);
  }

    getInfoVoyageur(){
    console.log(`Affichage des infos localStorage : ${localStorage.getItem('Voyager')}`);
  }

  setInfoVoyage(objVoyage: Voyage){
    localStorage.setItem('Voyage', JSON.stringify(objVoyage));
    console.log(`Stockage voyage : ${localStorage.getItem('Voyage')}`);
  }

}

