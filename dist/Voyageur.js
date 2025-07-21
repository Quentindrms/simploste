import { Voyage } from "Voyage";
export class Voyageur {
    constructor(nom, prenom, email, telephone, dateNaissance) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            throw new Error("Email invalide");
        }
        this.idVoyageur = Voyageur.compteur++;
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
        this.email = email;
        this.telephone = telephone;
    }
    creerVoyage(idVoyage, date, heure, destination, classe, reduc) {
        return new Voyage(this.idVoyageur, date, heure, destination, classe, reduc, idVoyage);
    }
    verifValideMail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(this.email);
    }
    verifValideTel() {
        const telRegex = /^(\+33|0)[1-9](\d{2}){4}$/;
        return telRegex.test(this.telephone);
    }
    getNomComplet() {
        return `${this.prenom} ${this.nom}`;
    }
    getInfosVoyageur() {
        const date = this.dateNaissance
            ? this.dateNaissance.toLocaleDateString()
            : "Date inconnue";
        return `ID ${this.idVoyageur} - ${this.getNomComplet()}, né(e) le ${date}, Email : ${this.email}, Téléphone : ${this.telephone}`;
    }
    generateurCodeVoyage(a) {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    }
    getInfosCodeVoyage(id, voyages, voyageurs) {
        const voyage = voyages.find((v) => v.idVoyage === id);
        if (!voyage)
            return "Voyage non trouvé";
        const voyageur = voyageurs.find((v) => v.idVoyageur === voyage.voyageurId);
        if (!voyageur)
            return "Voyageur non trouvé";
        return `ID Voyage: ${voyage.idVoyage}
Nom: ${voyageur.nom} ${voyageur.prenom}
Date: ${voyage.date}
Heure: ${voyage.heure}
Destination: ${voyage.destination}
Prix: ${voyage.calculPrix()} €`;
    }
}
Voyageur.compteur = 0;
