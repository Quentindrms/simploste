const paiementForm = document.getElementById("paiementForm") as HTMLFormElement;

if (paiementForm) {
    paiementForm.addEventListener ("submit", (event) => {
        event.preventDefault();

        const ExtractDatas = new FormData (paiementForm);

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
        const errors: string[]= [];

        //ok____errors_cb_name_______________ts+html
        if (typeof paiementDatas.cbName == "string") {
            const nameCb = paiementDatas.cbName.trim(); //méthode .trim() pour qu'il n'y ait pas d'espace avant/apres le texte saisi.
            if (nameCb.length <3) {
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
        } else {
            if (typeof paiementDatas.cbNumber === 'string'){
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
    if (errors.length >0) {
       const errorContainer = document.getElementById("errorsDiv");
      if (errorContainer) {
          errorContainer.innerHTML = 
          `<ul>
          ${errors
            .map ((errors) => {
              return `<li>${errors}</li>`
            })
            .join("")
          }
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

function validAlgoLuhn(cbNumberLuhn:string): boolean {

    const digits = cbNumberLuhn.replace(/\D/g, '').split("").map(Number).reverse();
    

    //.replace (/\D/g, '') -> on supprime les caractères qui ne sont pas des chiffres (espace, lettre, etc)
    //.split("") -> divise une chaîne de caractères en une liste ordonnée de sous-chaînes, place ces sous-chaînes dans un tableau et retourne le tableau. 
    //.map() -> crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.
    //.reverse ->  transpose les éléments d'un tableau : le premier élément devient le dernier et le dernier devient le premier et ainsi de suite.


    if (digits.length < 13 || digits.length >19){
    return false; 
    }
    //on s'assure que le nombre de caractère sur les CB sont compris entre 13 et 19

    let sum = 0;

    
    // Boucle sur chaque chiffre du tableau 'digits' (qui est déjà inversé).
    for (let i = 0; i < digits.length; i++) {
      let digit = digits[i];

      if (i % 2 === 1) {        // Si l'index est impair (c'est un chiffre à doubler)
        digit *= 2;
        if (digit > 9) {
          digit -= 9;     // Si le chiffre doublé est > 9 (ex: 12), on soustrait 9 (12-9=3)
        }
      }

      sum += digit;   // Ajoute le chiffre (modifié ou non) à la somme totale
    }

  return sum % 10 === 0;
  //somme totale est un multiple de 10, numéro CB est valide
}






// // const cbNumberLuhn: string = []
// function algoLuhn(cbNumberLuhn:string): boolean{
//     const cbNumberLuhn: Number[] = []

//     .lenght <13
//     .lenght >19

//     .lenght <13 || .lenght >19
    
// }
// // const lunhFunct = cbNumber


// if () {
//     if .replace(/\D/g, '') 
//     const .split('')
//     let = 0
//     .map(Number)  
//     .reverse(); 
    
// }



// if () {}
// if .replace(/\D/g, '') 
//     const .split('')
//     let = 0
//     .map(Number)  
//     .reverse(); 





//https://stackoverflow.com/questions/12310837/implementation-of-luhn-algorithm 
// takes the form field value and returns true on valid number
// function valid_credit_card(value) {
// // accept only digits, dashes or spaces
//     if (/[^0-9-\s]+/.test(value)) return false;

// // The Luhn Algorithm. It's so pretty.
//     var nCheck = 0, nDigit = 0, bEven = false;
//     value = value.replace(/\D/g, "");

//     for (var n = value.length - 1; n >= 0; n--) {
//         var cDigit = value.charAt(n),
//             nDigit = parseInt(cDigit, 10);

//         if (bEven) {
//             if ((nDigit *= 2) > 9) nDigit -= 9;
//         }

//         nCheck += nDigit;
//         bEven = !bEven;
//     }

//     return (nCheck % 10) == 0;
// }

    
//____algo de Luhn__Kev________
// function X (cbNumber) {
//     //ici intégrer algo de Lhun

//     return true
//}


//}   


// BOUTON REMISE A ZERO DU FORMUALIRE => "Formul'Air"


//===========================================
// RESTE A FAIRE : 

// Option : recap PAIEMENT (au moins 3 derniers chiffres)

}


