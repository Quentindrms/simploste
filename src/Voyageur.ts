import { Voyage } from "./Voyage.js";

export class Voyageur {
  private static compteur = 0;

  public readonly idVoyageur: number;
  private userName: string;
  private userForename: string;
  private dateNaissance?: string;
  private email: string;
  private telephone: string;
  private idVoyage: number;

  constructor(
    name: string,
    foreName: string,
    mail: string,
    telephone: string,
    dateNaissance: string,
  ) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
      throw new Error("Email invalide");
    }

    this.idVoyageur = Voyageur.compteur++;
    this.userForename = foreName;
    this.userName = name;
    this.dateNaissance = dateNaissance;
    this.email = mail;
    this.telephone = telephone;
  }

  verifValideMail(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  verifValideTel(): boolean {
    const telRegex = /^(\+33|0)[1-9](\d{2}){4}$/;
    return telRegex.test(this.telephone);
  }

  getUserName(): string{
    return this.userName;
  }

  getUserForename(): string{
    return this.userForename;
  }

  getInfosVoyageur(): string {
    const date = this.dateNaissance;
    return `ID ${
      this.idVoyageur
    } - ${this.getUserForename()}, né(e) le ${date}, Email : ${
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
Nom: ${voyageur.getUserName} ${voyageur.getUserForename()}
Date: ${voyage.date} 
Heure: ${voyage.heure}
Destination: ${voyage.destination}
Prix: ${voyage.calculPrix(0,0)} €`; /** A corriger */
  }
}
