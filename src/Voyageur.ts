import { Voyage } from "Voyage";

export class Voyageur {
  private static compteur = 0; // Compteur pour les IDs

  id: number; // Un seul id, pas besoin de idvoyageur
  nom: string;
  prenom: string;
  dateNaissance?: Date;
  email: string;
  telephone: string;

  constructor(
    nom: string,
    prenom: string,
    email: string,
    telephone: string,
    dateNaissance?: Date,
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

    // LOCAL STORAGE LOCAL STORAGE localStorage.setItem("hello", "Hello, world !")

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
  
// Générateur pseudo-aléatoire basé sur un entier
  mulberry32(a: number) {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  } 


  //INFOS PAR CODE:
  getinfosparcode(
    id: number,
    voyages: Voyage[],
    voyageurs: Voyageur[]
  ): string {
    const voyage = voyages.find((v) => v.id === id);
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
