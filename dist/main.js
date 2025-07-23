import { Voyageur } from "./Voyageur.js";
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
    };
    /** Objet dataJourney - données liées au voyage du client */
    let dataJourney = {
        arrival: formData.get('villeArrivee'),
        dateTimeLocal: formData.get('depart')
    };
    let voyageur = new Voyageur(dataUser.nom, dataUser.prenom, dataUser.mail, dataUser.phone, dataUser.dateBirth);
    console.log(voyageur);
}
