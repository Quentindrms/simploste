import { Voyage } from "./Voyage.js";
export class Voyageur {
    constructor(name, foreName, mail, telephone, dateNaissance, travelAlone) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) {
            throw new Error("Email invalide");
        }
        this.idVoyageur = Voyageur.compteur++;
        this.userForename = foreName;
        this.userName = name;
        this.dateNaissance = dateNaissance;
        this.email = mail;
        this.telephone = telephone;
        this.travelAlone = travelAlone;
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
    getUserName() {
        return this.userName;
    }
    getUserForename() {
        return this.userForename;
    }
    getInfosVoyageur() {
        const date = this.dateNaissance;
        return `ID ${this.idVoyageur} - ${this.getUserForename()}, né(e) le ${date}, Email : ${this.email}, Téléphone : ${this.telephone}`;
    }
    generateurCodeVoyage(a) {
        let t = (a += 0x6d2b79f5);
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        t = (t ^ (t >>> 14)) >>> 0;
        return ('0000000000' + t.toString(36)).slice(-10); // 🔥 exactement 10 caractères
    }
    getInfosCodeVoyage(id, voyages, voyageurs) {
        const voyage = voyages.find((v) => v.idVoyage === id);
        if (!voyage)
            return "Voyage non trouvé";
        const voyageur = voyageurs.find((v) => v.idVoyageur === voyage.idVoyageur);
        if (!voyageur)
            return "Voyageur non trouvé";
        return `ID Voyage: ${voyage.idVoyage}
Nom: ${voyageur.getUserName} ${voyageur.getUserForename()}
Date: ${voyage.date} 
Heure: ${voyage.heure}
Destination: ${voyage.destination}
Prix: ${voyage.calculPrix()} €`;
    }
}
Voyageur.compteur = 0;
