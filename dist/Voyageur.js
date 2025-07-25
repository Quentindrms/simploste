export class Voyageur {
    constructor(name, foreName, mail, telephone, dateNaissance) {
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
    generateurCodeVoyage() {
        const travelCode = Array.from({ length: 10 }, () => Math.floor(Math.random() * 10)).join("");
        return travelCode;
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
