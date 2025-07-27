import { data } from "./data.js";
import { AppData, Destination, VoyageData } from "./interfaces.js";

export class Voyage {
  date: string;
  destination: string;
  standing: string;
  standingPerks: string[];

  pricePerkm: number;
  totalPrice: number;
  distanceFromParis: number;

  data: AppData;
  destinationDataLabel: string;

  constructor(
    date: string,
    destination: string,
    classe: string,
  ) {
    this.date = date;
    this.destination = destination;
    this.standing = classe;
    this.standingPerks = [];

    this.pricePerkm = 0;
    this.totalPrice = 0;
    this.distanceFromParis = 0;

    this.data = data;
    this.destinationDataLabel = '';
  }

  getDestinationInfo() {
    console.log("Destination info")
    for(let i = 0 ; i < data.destinations.length ; i++){
      if(data.destinations[i].label === this.destination){
        console.log(`Entrée utilisateur : ${this.destination} / Sortie tableau : ${data.destinations[i].label}`)
        this.destinationDataLabel = data.destinations[i].label;
        this.distanceFromParis = data.destinations[i].distanceFromParis;
      }
    }
    console.log(`Destination info : ${this.destinationDataLabel} / ${this.distanceFromParis}`);
  }

  getStandingInfo(){
    console.log('Standing info');
    for(let i = 0 ; i < data.standing.length ; i++){
      if(data.standing[i].label === this.standing){
        this.pricePerkm = data.standing[i].pricePerKm;
        this.standingPerks = data.standing[i].perks;
        console.log(`Classe : ${data.standing[i].label}`)
      }
    }
    console.log(`Prix/km : ${this.pricePerkm} | Spécifications : ${this.standingPerks}`);
  }

  calculatePrice(){
    this.totalPrice = this.pricePerkm * this.distanceFromParis
    console.log(`Prix total : ${this.totalPrice}`)
  }
}