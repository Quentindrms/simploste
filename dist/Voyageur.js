import { Voyage } from "./Voyage.js";
export class Voyageur {
    constructor(nom, prenom, email, telephone, dateNaissance, travelAlone) {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
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
Prix: ${voyage.calculPrix(0, 0)} €`; /** A corriger */
    }
}
Voyageur.compteur = 0;
