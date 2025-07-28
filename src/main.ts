import { Voyageur } from "./Voyageur.js";
import { Voyage } from "./Voyage.js";
import { LocalStorage } from "./localstorage.js";
import { FlighData } from "./interfaces.js";

let dataUser = {
    nom: '',
    prenom: '',
    dateBirth: '',
    mail: '',
    phone: '',
    bookingNumber: '',
}

let dataJourney:FlighData = {
    arrival: '',
    dateTimeLocal: '',
    travelClass: '',
    totalPrice: '',
}

const form = document.getElementById('form') as HTMLFormElement;
//const btnSubmit = document.getElementById('btnSubmit');
const formData = new FormData(form);

const btnSubmit = document.createElement('input');
btnSubmit.type = "submit";
btnSubmit.className = "container-form";
btnSubmit.id = 'btnSubmit';
btnSubmit.value = 'Confirmer la commande';

const price = document.createElement('p');
const departure = document.createElement('p');
const classe = document.createElement('p');
const classePerks = document.createElement('p');

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

    sessionStorage.setItem(dataUser.bookingNumber, JSON.stringify(voyageur));
    sessionStorage.setItem(`PDNG-${dataUser.bookingNumber}`, JSON.stringify(voyage));
    sessionStorage.setItem(`ORDR-${dataUser.bookingNumber}`, JSON.stringify(dataJourney))
    /** Accède à paiement.html en spécifiant l'ID de la commande demandée */
    window.location.href = `paiement.html?id=${dataUser.bookingNumber}`;
}

function createRecapContainer() {
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


    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        submitForm(voyageur, voyage)
    })

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
        totalPrice: '',
    }

    /** Actions liées à la validation du formulaire  */
    const voyageur = new Voyageur(dataUser.nom, dataUser.prenom, dataUser.mail, dataUser.phone, dataUser.dateBirth);
    dataUser.bookingNumber = voyageur.generateurCodeVoyage();
    console.log(`Code voyage ${dataUser.bookingNumber}`);
    const voyage = new Voyage(dataJourney.dateTimeLocal, dataJourney.arrival, dataJourney.travelClass);

    voyage.getDestinationInfo();
    voyage.getStandingInfo();
    voyage.calculatePrice();
    dataJourney.totalPrice = voyage.totalPrice.toString();

    price.innerText = `Coût total du voyage : ${voyage.totalPrice}`;
    departure.innerText = `Ville d'arrivée : ${voyage.destination}`;
    classe.innerText = `Vous voyagez en classe ${voyage.standing}`;
    classePerks.innerText = `En voyagant en ${voyage.standing} vous bénéficiez de : ${voyage.standingPerks}`

    form.appendChild(btnSubmit);
}

/** Lorsque l'utilisateur */
