"use strict";
const form = document.getElementById('form-title');
const btnSubmit = document.getElementById('btnSubmit');
if (btnSubmit) {
    btnSubmit.addEventListener('submit', () => { submitForm(); });
}
function submitForm() {
    console.log('Click');
}
