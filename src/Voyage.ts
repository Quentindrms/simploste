export class Voyage {
  id: number;
  date: string;
  heure: string;
  destination: string;
  classe: string;
  reduc: boolean;
  voyageurId: number;  // <- ajouté

  constructor(
    id: number,
    date: string,
    heure: string,
    destination: string,
    classe: string,
    reduc: boolean,
    voyageurId: number  // <- ajouté
  ) {
    this.id = id;
    this.date = date;
    this.heure = heure;
    this.destination = destination;
    this.classe = classe;
    this.reduc = reduc;
    this.voyageurId = voyageurId;  // <- assigné
  }

  calculPrix(): number {
    // FORMULE LOGIQUE DE CALCUL PRIX CF MIND MAP
    return 0;
  }
}
