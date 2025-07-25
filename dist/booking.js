const bookingForm = document.getElementById('booking-form');
let userData = '';
let bookingData = '';
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
    userData = localStorage.getItem(dataBooking.bookingNumber);
    bookingData = localStorage.getItem(`TRVL-${dataBooking.bookingNumber}`);
}
export {};
