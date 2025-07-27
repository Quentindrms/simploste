import { Voyageur } from "./Voyageur.js";
import { Voyage } from "./Voyage.js";
let dataUser = {
    nom: '',
    prenom: '',
    dateBirth: '',
    mail: '',
    phone: '',
    bookingNumber: '',
};
let dataJourney = {
    arrival: '',
    dateTimeLocal: '',
    travelClass: '',
    totalPrice: '',
};
const form = document.getElementById('form');
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
validateButton === null || validateButton === void 0 ? void 0 : validateButton.addEventListener('click', (e) => { createRecapContainer(); });
const recapContainer = document.createElement('div');
recapContainer.className = "form-fieldset container";
/**if (btnSubmit) {
    form.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        submitForm()
    });
} */
console.log("hello world");
function submitForm(objVoyageur, objVoyage) {
    let voyageur = objVoyageur;
    let voyage = objVoyage;
    sessionStorage.setItem(dataUser.bookingNumber, JSON.stringify(voyageur));
    sessionStorage.setItem(`PDNG-${dataUser.bookingNumber}`, JSON.stringify(voyage));
    sessionStorage.setItem(`ORDR-${dataUser.bookingNumber}`, JSON.stringify(dataJourney));
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
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        submitForm(voyageur, voyage);
    });
    if (btnSubmit) {
        btnSubmit.hidden = false;
    }
    /** Objet dataUser - données liées au client  */
    dataUser = {
        nom: formData.get('nom'),
        prenom: formData.get('prenom'),
        dateBirth: formData.get('age'),
        mail: formData.get('email'),
        phone: formData.get('tel'),
        bookingNumber: '',
    };
    /** Objet dataJourney - données liées au voyage du client */
    dataJourney = {
        arrival: formData.get('villeArrivee'),
        dateTimeLocal: formData.get('depart'),
        travelClass: formData.get('classe-voyage'),
        totalPrice: '',
    };
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
    classePerks.innerText = `En voyagant en ${voyage.standing} vous bénéficiez de : ${voyage.standingPerks}`;
    form.appendChild(btnSubmit);
}
/** Lorsque l'utilisateur */
