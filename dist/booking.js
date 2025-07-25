const bookingForm = document.getElementById('booking-form');
let user = '';
let booking = '';
let travelerData;
let travelingData;
console.log(bookingForm);
if (bookingForm) {
    bookingForm.addEventListener('submit', (event) => {
        event.preventDefault();
        getBookingData();
    });
}
;
function getBookingData() {
    const bookingSubmitData = new FormData(bookingForm);
    let dataBooking = {
        bookingNumber: bookingSubmitData.get('number'),
    };
    console.log('click');
    console.log(`TRVL-${dataBooking.bookingNumber}`);
    console.log(localStorage.getItem(dataBooking.bookingNumber));
    user = localStorage.getItem(dataBooking.bookingNumber);
    booking = localStorage.getItem(`TRVL-${dataBooking.bookingNumber}`);
    if (user && booking) {
        travelerData = JSON.parse(user);
        travelingData = JSON.parse(booking);
        displayBookingData();
    }
    else {
        window.alert("Le code saisit n'existe pas");
    }
}
function displayBookingData() {
    bookingForm.remove();
    const body = document.querySelector('body');
    const bookingContainer = document.createElement('div');
    bookingContainer.className = 'booking-container container';
    const containerTraveler = document.createElement('div');
    containerTraveler.className = 'booking';
    const containerTraveling = document.createElement('div');
    containerTraveling.className = 'booking';
    const bookingContainerTitle = document.createElement('h2');
    bookingContainerTitle.innerText = "Votre réservation";
    bookingContainerTitle.className = "booking-title";
    const displayFullName = document.createElement('h3');
    const displayBirthDate = document.createElement('p');
    const displayMail = document.createElement('p');
    const displayPhone = document.createElement('p');
    const displayDate = document.createElement('p');
    const displayDestination = document.createElement('p');
    const displayClasse = document.createElement('p');
    displayFullName.innerText = `${travelerData.userForename.toString()} ${travelerData.userName.toString()}`;
    displayBirthDate.innerText = ` Date de naissance : ${travelerData.dateNaissance}`;
    displayMail.innerText = `Mail : ${travelerData.email}`;
    displayPhone.innerText = `Téléphone : ${travelerData.telephone}`;
    displayDate.innerText = `Départ : ${travelingData.date}`;
    displayDestination.innerText = `Destination : ${travelingData.destination}`;
    displayClasse.innerText = `Classe de voyage : ${travelingData.classe}`;
    if (body) {
        body.appendChild(bookingContainerTitle);
        body.appendChild(bookingContainer);
        bookingContainer.appendChild(containerTraveler);
        /** Données liées au client */
        containerTraveler.appendChild(displayFullName);
        containerTraveler.appendChild(displayBirthDate);
        containerTraveler.appendChild(displayMail);
        containerTraveler.appendChild(displayPhone);
        /** Données liées au voyage */
        bookingContainer.appendChild(containerTraveling);
        containerTraveling.appendChild(displayDate);
        containerTraveling.appendChild(displayDestination);
        containerTraveling.appendChild(displayClasse);
    }
}
export {};
