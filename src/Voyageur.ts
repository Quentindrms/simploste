import { Voyage } from "Voyage";

export class Voyageur {
  private static compteur = 0; // Compteur pour les IDs

  id: number; // Un seul id, pas besoin de idvoyageur
  nom: string;
  prenom: string;
  dateNaissance: Date | null;
  email: string;
  telephone: string;

  constructor(
    nom: string,
    prenom: string,
    dateNaissance: Date | null,
    email: string,
    telephone: string
  ) {
    this.id = Voyageur.compteur++;
    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.email = email;
    this.telephone = telephone;
  }

  // création d’un voyage associé au voyageur
  creerVoyage(
    id: number,
    date: string,
    heure: string,
    destination: string,
    classe: string,
    reduc: boolean
  ): Voyage {
    return new Voyage(id, date, heure, destination, classe, reduc, this.id);
  }

  ////////////////////VERIF MAIL ET TEL VALIDES///////////////////
  // Verif mail valide:
  ismailvalid(): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }

  // Verif tel valide:
  istelvalid(): boolean {
    const telRegex = /^(\+33|0)[1-9](\d{2}){4}$/;
    return telRegex.test(this.telephone);
  }

  //////////////////INFOS NOMP PRENOM ET COMPLETES VOYAGEUR///////////////
  // Infos voyageur (nom complet)
  getnomcomplet(): string {
    return `${this.prenom} ${this.nom}`;
  }

  // Infos complètes voyageur
  getinfosvoyageur(): string {
    const date = this.dateNaissance
      ? this.dateNaissance.toLocaleDateString()
      : "Date inconnue";
    return `ID ${
      this.id
    } - ${this.getnomcomplet()}, né(e) le ${date}, Email : ${
      this.email
    }, Téléphone : ${this.telephone}`;
  }

  ////////////////////////PARTIE INFOS CODE//////////////////
  //CODE POUR INFO:
  attributioncode(): string {
    // LOGIQUE INDEX DONNE CODE FROM AAA, AAB,.. TO ZZZ
    return "";
  }

  //INFOS PAR CODE:
  getinfosparcode(
    idVoyage: number,
    voyages: Voyage[],
    voyageurs: Voyageur[]
  ): string {
    const voyage = voyages.find((v) => v.id === idVoyage);
    if (!voyage) return "Voyage non trouvé";

    const voyageur = voyageurs.find((v) => v.id === voyage.voyageurId);
    if (!voyageur) return "Voyageur non trouvé";

    return `ID Voyage: ${voyage.id}
Nom: ${voyageur.nom} ${voyageur.prenom}
Date: ${voyage.date}
Heure: ${voyage.heure}
Destination: ${voyage.destination}
Prix: ${voyage.calculPrix()} €`;
  }
}
