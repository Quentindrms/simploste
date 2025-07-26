"use strict";
const paiementForm = document.getElementById("paiementForm");
if (paiementForm) {
    paiementForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const ExtractDatas = new FormData(paiementForm);
        const paiementDatas = {
            cbName: ExtractDatas.get("cbName"),
            cbTypes: ExtractDatas.get("cbTypes"),
            cbNumber: ExtractDatas.get("cbNumber"),
            cbExpirationMM: ExtractDatas.get("cbExpirationMM"),
            cbExpirationYY: ExtractDatas.get("cbExpirationYY"),
            cbSecurity: ExtractDatas.get("cbSecurity")
        };
        //console.log(paiementDatas);
        //____errors____________________
        const errors = [];
        //ok____errors_cb_name_______________ts+html
        if (typeof paiementDatas.cbName == "string") {
            const nameCb = paiementDatas.cbName.trim(); //méthode .trim() pour qu'il n'y ait pas d'espace avant/apres le texte saisi.
            if (nameCb.length < 3) {
                errors.push("Le nom sur la carte doit contenir au moins 3 caratères.");
            }
            if (nameCb !== nameCb.toUpperCase()) {
                errors.push("Le nom sur la carte doit être en majuscules.");
            }
        }
        //console.log(errors);
        //ok____errors_type carte_______________
        if (!paiementDatas.cbTypes) {
            errors.push("Vous devez sélectionner un type de paiement.");
        }
        //console.log(errors);
        //____errors_cb_number_______________algo de Lhun
        if (!paiementDatas.cbNumber) {
            errors.push("Vous devez renseigner le numero de votre carte.");
        } //la fonction pour algo de Lhun est à inserer plus bas.
        //console.log(errors);
        //?____errors_cb_expiration_______________ts+html
        if (paiementDatas.cbExpirationMM === null || paiementDatas.cbExpirationYY === null) {
            errors.push("Vous devez selectionner le mois et l'année d'expiration de votre carte.");
        }
        // if (!paiementDatas.cbExpirationMM) {
        //     errors.push ("Vous devez renseigner la date d'expiration de votre carte");            
        // }
        // if (typeof paiementDatas.cbExpirationMM !== "string") {
        //     errors.push ("Vous devez renseigner le mois et l'année d'expiration de votre carte : MM/AAAA");
        // }
        // if (!paiementDatas.cbExpirationYY) {
        //     errors.push ("Vous devez renseigner la date d'expiration de votre carte");            
        // }
        // if (typeof paiementDatas.cbExpirationYY !== "string") {
        //     errors.push ("Vous devez renseigner le mois et l'année d'expiration de votre carte : MM/AAAA");
        // }
        console.log(errors);
        //ok____errors_ccv_cb_security______________ ts+HTML
        if (typeof paiementDatas.cbSecurity == "string") {
            const cbSecurity = paiementDatas.cbSecurity.trim();
            const isValidSecurityCode = /^[0-9]{3}$/.test(cbSecurity); //RegExp champs = 3 chiffres exactement
            if (!isValidSecurityCode) {
                errors.push("Vous devez saisir un code de sécurité de 3 chiffres");
            }
            //console.log(errors);
        }
        //___affichage des erreurs ____tableau errors________
        //__ methode _ exo _ Kev__
        if (errors.length > 0) {
            const errorContainer = document.getElementById("errorsDiv");
            //----Methode Kev-----
            if (errorContainer) {
                errorContainer.innerHTML =
                    `<ul>
        ${errors
                        .map((errors) => {
                        return `<li>${errors}</li>`;
                    })
                        .join("")}
        </ul>`;
            }
            return;
            //----Methode Gauthier-----
            //   if (!errorContainer) {
            //     alert("erreur tableau");
            //  => => rentre les differentes erreurs ici.
            //     return
            // }
            // errorContainer.innerText = "erreur Tbx"
            // return
        }
        //_________alerte_____
        console.log("paiement soumis : ", paiementDatas);
        alert("paiement soumis avec succès");
    });
    //______function Luhn____________
    //https://stackoverflow.com/questions/12310837/implementation-of-luhn-algorithm 
    // takes the form field value and returns true on valid number
    function valid_credit_card(value) {
        // accept only digits, dashes or spaces
        if (/[^0-9-\s]+/.test(value))
            return false;
        // The Luhn Algorithm. It's so pretty.
        var nCheck = 0, nDigit = 0, bEven = false;
        value = value.replace(/\D/g, "");
        for (var n = value.length - 1; n >= 0; n--) {
            var cDigit = value.charAt(n), nDigit = parseInt(cDigit, 10);
            if (bEven) {
                if ((nDigit *= 2) > 9)
                    nDigit -= 9;
            }
            nCheck += nDigit;
            bEven = !bEven;
        }
        return (nCheck % 10) == 0;
    }
    //____algo de Luhn__Kev________
    // function X (cbNumber) {
    //     //ici intégrer algo de Lhun
    //     return true
    //}
}
// BOUTON REMISE A ZERO DU FORMUALIRE => "Formul'Air"
//===========================================
// RESTE A FAIRE : 
// Option : recap PAIEMENT (au moins 3 derniers chiffres)
