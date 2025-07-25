import { Voyage } from "./Voyage.js";

export class Voyageur {
  private static compteur = 0;

  public readonly idVoyageur: number;
  private nom: string;
  private prenom: string;
  private dateNaissance?: string;
  private email: string;
  private telephone: string;
  private travelAlone: string;

  constructor(
    nom: string,
    prenom: string,
    email: string,
    telephone: string,
    dateNaissance: string,
    travelAlone: string
  ) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new Error("Email invalide");
    }

    this.idVoyageur = Voyageur.compteur++;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.email = email;
    this.telephone = telephone;
    this.travelAlone = travelAlone;
  }

  creerVoyage(
    idVoyage: number,
    date: string,
    heure: string,
    destination: string,
    classe: string,
    reduc: boolean
  ): Voyage {
    return new Voyage(
      this.idVoyageur,
      date,
      heure,
      destination,
      classe,
      reduc,
      idVoyage
    );
  }

  verifValideMail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  verifValideTel(): boolean {
    const telRegex = /^(\+33|0)[1-9](\d{2}){4}$/;
    return telRegex.test(this.telephone);
  }

  getNomComplet(): string {
    return `${this.prenom} ${this.nom}`;
  }

  getInfosVoyageur(): string {
    const date = this.dateNaissance;
    return `ID ${
      this.idVoyageur
    } - ${this.getNomComplet()}, né(e) le ${date}, Email : ${
      this.email
    }, Téléphone : ${this.telephone}`;
  }
  generateurCodeVoyage(): string {
    const travelCode = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 10)
    ).join("");
    return travelCode
  }

  getInfosCodeVoyage(
    id: number,
    voyages: Voyage[],
    voyageurs: Voyageur[]
  ): string {
    const voyage = voyages.find((v) => v.idVoyage === id);
    if (!voyage) return "Voyage non trouvé";

    const voyageur = voyageurs.find((v) => v.idVoyageur === voyage.idVoyageur);
    if (!voyageur) return "Voyageur non trouvé";

    return `ID Voyage: ${voyage.idVoyage}
Nom: ${voyageur.nom} ${voyageur.prenom}
Date: ${voyage.date} 
Heure: ${voyage.heure}
Destination: ${voyage.destination}
Prix: ${voyage.calculPrix()} €`;
  }
}
