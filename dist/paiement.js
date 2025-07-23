"use strict";
const paiementForm = document.getElementById("paiementform");
if (paiementForm) {
    paiementForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(paiementForm);
        const paiementDatas = {
            cb_name: formData.get("cb_name"),
            cb_types: formData.get("cb_types"),
            cb_number: formData.get("cb_number"),
            cb_expiration: formData.get("cb_expiration"),
            cb_security: formData.get("cb_security")
        };
        // console.log(paiementDatas);
        //____errors____________________
        const errors = [];
        //____errors_cb_name_______________
        if (typeof paiementDatas.cb_name == "string") { /* && paiementDatas.cb_name.length <= 3*/
            const namecb = paiementDatas.cb_name.trim();
            if (namecb.length < 3) {
                errors.push("le nom sur la carte doit contenir au moins 3 caratères.");
            }
            if (namecb !== namecb.toUpperCase()) {
                errors.push("Le nom sur la carte doit être en majuscules.");
            }
            //console.log(errors);
            //____errors_type carte_______________
            if (!paiementDatas.cb_types) {
                errors.push("Vous devez sélectionner un type de paiement");
            }
            //____errors_cb_number_______________
            if (!paiementDatas.cb_types) {
                errors.push("Vous devez renseigner le numero de votre carte");
            }
            //____errors_cb_expiration_______________
            if (!paiementDatas.cb_expiration) {
                errors.push("Vous devez renseigner la date d'expiration de votre carte");
            }
            if (typeof paiementDatas.cb_expiration == "string") { }
            //____errors_ccv_______________
            console.log(errors);
            // !!!! ds HTML ajouter les condition cb_name en UpperCase !!!!! 
        }
    });
}
//____algo de Luhn__________
function X(cb_number) {
    //ici intégrer algo de Lhun
    return true;
}
