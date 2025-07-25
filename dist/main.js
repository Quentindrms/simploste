import { Voyageur } from "./Voyageur.js";
import { Voyage } from "./Voyage.js";
import { LocalStorage } from "./localstorage.js";
const form = document.getElementById('form');
const btnSubmit = document.getElementById('btnSubmit');
if (btnSubmit) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        submitForm();
    });
}
console.log("hello world");
function submitForm() {
    const formData = new FormData(form);
    /** Objet dataUser - données liées au client  */
    let dataUser = {
        nom: formData.get('nom'),
        prenom: formData.get('prenom'),
        dateBirth: formData.get('age'),
        mail: formData.get('email'),
        phone: formData.get('tel'),
        bookingNumber: '',
    };
    /** Objet dataJourney - données liées au voyage du client */
    let dataJourney = {
        arrival: formData.get('villeArrivee'),
        dateTimeLocal: formData.get('depart'),
        travelClass: formData.get('classe-voyage'),
    };
    const voyageur = new Voyageur(dataUser.nom, dataUser.prenom, dataUser.mail, dataUser.phone, dataUser.dateBirth);
    dataUser.bookingNumber = voyageur.generateurCodeVoyage();
    const voyage = new Voyage(dataJourney.dateTimeLocal, dataJourney.arrival, dataJourney.travelClass);
    let storage = new LocalStorage();
    storage.setInfoVoyageur(voyageur, dataUser.bookingNumber);
    storage.setInfoVoyage(voyage, dataUser.bookingNumber);
}
