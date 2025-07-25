import { Voyageur } from "./Voyageur.js";
import { Voyage } from "./Voyage.js";
import { LocalStorage } from "./localstorage.js";

const form = document.getElementById('form') as HTMLFormElement;
const btnSubmit = document.getElementById('btnSubmit');



if (btnSubmit) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        submitForm()
    });
}

console.log("hello world");

function submitForm() {

    const formData = new FormData(form);


/** Objet dataUser - données liées au client  */
let dataUser = {
    nom: formData.get('nom') as string,
    prenom: formData.get('prenom') as string,
    dateBirth: formData.get('age') as string,
    mail: formData.get('email') as string,
    phone: formData.get('tel') as string,
}

/** Objet dataJourney - données liées au voyage du client */
let dataJourney = {
    arrival: formData.get('villeArrivee') as string,
    dateTimeLocal: formData.get('depart') as string,
    travelClass: formData.get('classe-voyage') as string,
}

    const voyageur = new Voyageur(dataUser.nom, dataUser.prenom, dataUser.mail, dataUser.phone, dataUser.dateBirth);
    const voyage = new Voyage(dataJourney.dateTimeLocal, dataJourney.arrival, dataJourney.travelClass);
    let storage = new LocalStorage();
    storage.setInfoVoyageur(voyageur);
    console.log(voyageur);
    console.log(storage.getInfoVoyageur());
    console.log(voyage);

    storage.setInfoVoyage(voyage);
}

