

const bookingForm = document.getElementById('booking-form') as HTMLFormElement;
const btnBookingSubmit = document.getElementById('booking-form');


if (btnBookingSubmit) {
    btnBookingSubmit.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        getBookingData();
    })
};

function getBookingData() {
    const bookingSubmitData = new FormData(bookingForm);

    let dataBooking = {
        bookingNumber: bookingSubmitData.get('number'),
    }
    console.log('click')
    console.log(dataBooking);
}

