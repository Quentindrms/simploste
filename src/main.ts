import { Voyageur } from "./Voyageur.js";
import { Voyage } from "./Voyage.js";
import { LocalStorage } from "./localstorage.js";

let dataUser = {
    nom: '',
    prenom: '',
    dateBirth: '',
    mail: '',
    phone: '',
    bookingNumber: '',
}

let dataJourney = {
    arrival: '',
    dateTimeLocal: '',
    travelClass: '',
}

const form = document.getElementById('form') as HTMLFormElement;
//const btnSubmit = document.getElementById('btnSubmit');
const formData = new FormData(form);

const btnSubmit = document.createElement('input');
btnSubmit.type = "submit";
btnSubmit.className = "container-form";
btnSubmit.id = 'btnSubmit';
btnSubmit.value = 'Confirmer la commande';

if (btnSubmit) {
    btnSubmit.hidden = true;
}

const validateButton = document.getElementById('validate-button');
validateButton?.addEventListener('click', (e: Event) => { createRecapContainer() })

const recapContainer = document.createElement('div');
recapContainer.className = "form-fieldset container"

/**if (btnSubmit) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        submitForm()
    });
} */

console.log("hello world");

function submitForm(objVoyageur: Voyageur, objVoyage: Voyage) {

    let voyageur = objVoyageur;
    let voyage = objVoyage;

    let storage = new LocalStorage();
    /** storage.setInfoVoyageur(voyageur, dataUser.bookingNumber);
    storage.setInfoVoyage(voyage, dataUser.bookingNumber); **/

    sessionStorage.setItem(dataUser.bookingNumber, JSON.stringify(voyageur));
    sessionStorage.setItem(`PDNG-${dataUser.bookingNumber}`, JSON.stringify(voyage));
}

function createRecapContainer() {
    const price = document.createElement('p');
    const departure = document.createElement('p');
    const classe = document.createElement('p');
    const classePerks = document.createElement('p');
    form.appendChild(recapContainer);

    recapContainer.appendChild(price);
    recapContainer.appendChild(departure);
    recapContainer.appendChild(classe);
    recapContainer.appendChild(classePerks);

    price.innerText = "Le prix";
    departure.innerText = "Le départ";
    classe.innerText = "La classe";
    classePerks.innerText = "Avantage de la classe";
    writeRecapContainer();
}

function writeRecapContainer() {


        form.addEventListener('submit', (e:Event) => {
            e.preventDefault();
            submitForm(voyageur, voyage)})

    if (btnSubmit) {
        btnSubmit.hidden = false;
    }

    /** Objet dataUser - données liées au client  */

    dataUser = {
        nom: formData.get('nom') as string,
        prenom: formData.get('prenom') as string,
        dateBirth: formData.get('age') as string,
        mail: formData.get('email') as string,
        phone: formData.get('tel') as string,
        bookingNumber: '',
    }

    /** Objet dataJourney - données liées au voyage du client */

    dataJourney = {
        arrival: formData.get('villeArrivee') as string,
        dateTimeLocal: formData.get('depart') as string,
        travelClass: formData.get('classe-voyage') as string,
    }

        /** Actions liées à la validation du formulaire  */
    const voyageur = new Voyageur(dataUser.nom, dataUser.prenom, dataUser.mail, dataUser.phone, dataUser.dateBirth);
    dataUser.bookingNumber = voyageur.generateurCodeVoyage();
    console.log(`Code voyage ${dataUser.bookingNumber}`);
    const voyage = new Voyage(dataJourney.dateTimeLocal, dataJourney.arrival, dataJourney.travelClass);

    voyage.getDestinationInfo();
    voyage.getStandingInfo();

    form.appendChild(btnSubmit);
}

/** Lorsque l'utilisateur */
