/** Récupère les données de la commande */
const body = document.querySelector('body');
const urlParam = new URLSearchParams(window.location.search);
const orderTicket = urlParam.get('id');
let orderOBJ;
console.log(orderTicket);
const orderSpcec = sessionStorage.getItem(`PDNG-${orderTicket}`);
const priceText = document.getElementById('pendingAmount');
if (orderSpcec && priceText) {
    orderOBJ = JSON.parse(orderSpcec);
    console.log(orderOBJ);
    priceText.innerText = `Reste à régler : ${orderOBJ.totalPrice} euros`;
}
const paiementForm = document.getElementById("paiementForm");
/** Lors du clic sur le bouton submit */
if (paiementForm) {
    paiementForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const ExtractDatas = new FormData(paiementForm);
        if (orderTicket != null) {
            let userStorage = sessionStorage.getItem(orderTicket);
            let journeyStorage = orderSpcec;
            if (userStorage && journeyStorage) {
                localStorage.setItem(orderTicket, userStorage);
                localStorage.setItem(`TRVL-${orderTicket}`, journeyStorage);
                //sessionStorage.clear();
                paiementForm.hidden = true;
                const validation = document.createElement('p');
                validation.className = "container booking-validation";
                validation.innerText = `Félicitation vous partez pour ${orderOBJ.arrival}`;
                body === null || body === void 0 ? void 0 : body.appendChild(validation);
                const displayOrderTicket = document.createElement('strong');
                displayOrderTicket.className = "container booking-validation";
                displayOrderTicket.innerText = `Votre numéro de ticket : ${orderTicket}`;
                body === null || body === void 0 ? void 0 : body.appendChild(displayOrderTicket);
            }
        }
        const paiementDatas = {
            cbName: ExtractDatas.get("cbName"),
            cbTypes: ExtractDatas.get("cbTypes"),
            cbNumber: ExtractDatas.get("cbNumber"),
            cbExpirationMM: ExtractDatas.get("cbExpirationMM"),
            cbExpirationYY: ExtractDatas.get("cbExpirationYY"),
            cbSecurity: ExtractDatas.get("cbSecurity"),
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
        }
        else {
            if (typeof paiementDatas.cbNumber === 'string') {
                if (!validAlgoLuhn(paiementDatas.cbNumber)) {
                    errors.push("Le numéro de votre carte n'est pas valide.");
                }
            }
        }
        //la fonction pour algo de Lhun est à inserer plus bas.
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
        }
        //_________alerte_____
        console.log("paiement soumis : ", paiementDatas);
        alert("paiement soumis avec succès");
    });
    //----Methode Gauthier-----
    //   if (!errorContainer) {
    //     alert("erreur tableau");
    //  => => rentre les differentes erreurs ici.
    //     return
    // }
    // errorContainer.innerText = "erreur Tbx"
    // return
    // }   
    //______function Luhn____________
    function validAlgoLuhn(cbNumberLuhn) {
        const digits = cbNumberLuhn.replace(/\D/g, '').split("").map(Number).reverse();
        //.replace (/\D/g, '') -> on supprime les caractères qui ne sont pas des chiffres (espace, lettre, etc)
        //.split("") -> divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau. 
        //.map() -> crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
        //.reverse ->  transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.
        if (digits.length < 13 || digits.length > 19) {
            return false;
        }
        //on s'assure que le nombre de caractère sur les CB sont compris entre 13 et 19
        let sum = 0;
        // Boucle sur chaque chiffre du tableau 'digits' (qui est déjà inversé).
        for (let i = 0; i < digits.length; i++) {
            let digit = digits[i];
            if (i % 2 === 1) { // Si l'index est impair (c'est un chiffre à doubler)
                digit *= 2;
                if (digit > 9) {
                    digit -= 9; // Si le chiffre doublé est > 9 (ex: 12), on soustrait 9 (12-9=3)
                }
            }
            sum += digit; // Ajoute le chiffre (modifié ou non) à la somme totale
        }
        return sum % 10 === 0;
        //somme totale est un multiple de 10, numéro CB est valide
    }
}
export {};
