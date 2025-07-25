
import { data } from "./data";
import { LocalStorage } from "./localstorage.js";

const bookingForm = document.getElementById('booking-form') as HTMLFormElement;

let userData:string|null = '';
let bookingData:string|null = '';

console.log(bookingForm);


if (bookingForm) {
    bookingForm.addEventListener('submit', (event: Event) => {
        event.preventDefault();
        getBookingData();
    })
};

function getBookingData() {
    const bookingSubmitData = new FormData(bookingForm);

    let dataBooking = {
        bookingNumber: bookingSubmitData.get('number') as string,
    }
    console.log('click')
    console.log(`TRVL-${dataBooking.bookingNumber}`);
    console.log(localStorage.getItem(dataBooking.bookingNumber));

    userData = localStorage.getItem(dataBooking.bookingNumber);
    bookingData = localStorage.getItem(`TRVL-${dataBooking.bookingNumber}`);
}

