const bookingForm = document.getElementById('booking-form');
const btnBookingSubmit = document.getElementById('booking-form');
if (btnBookingSubmit) {
    btnBookingSubmit.addEventListener('submit', (e) => {
        e.preventDefault();
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
    console.log(dataBooking);
}
export {};
