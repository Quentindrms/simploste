const paiementForm = document.getElementById ("paiementform") as HTMLFormElement;
if(paiementForm){
paiementForm.addEventListener("submit", (event) => {
    event.preventDefault();


    const formData = new FormData(paiementForm);

    const paiementDatas = {
        cb_name: formData.get("cb_name"),
        cb_types: formData.get("cb_types"),
        cb_number: formData.get("cb_number"),
        cb_expiration: formData.get("cb_expiration"),
        cb_security: formData.get("cb_security")
    }

    // console.log(paiementDatas);
    

    //____errors____________________
    const errors: string[]= []

    //ok____errors_cb_name_______________ts+html
    if (typeof paiementDatas.cb_name == "string" ) {  /* && paiementDatas.cb_name.length <= 3*/ 
        const namecb = paiementDatas.cb_name.trim();  //méthode .trim() pour qu'il n'y ait pas d'espace avant/apres le text saisi

    if (namecb.length <3) {
        errors.push("le nom sur la carte doit contenir au moins 3 caratères.");
        }
    
    if (namecb !== namecb.toUpperCase()) {
        errors.push("Le nom sur la carte doit être en majuscules.")
    }
    }
    //console.log(errors);
        
//ok____errors_type carte_______________

    if (!paiementDatas.cb_types) {
        errors.push ("Vous devez sélectionner un type de paiement")
    }

    //console.log(errors);
    
   
//____errors_cb_number_______________algo de Lhun

if (!paiementDatas.cb_types) {
        errors.push ("Vous devez renseigner le numero de votre carte")
    }   //la fonction pour algo de Lhun est plus bas


//?____errors_cb_expiration_______________ts+html
if (!paiementDatas.cb_expiration){
    errors.push ("Vous devez renseigner la date d'expiration de votre carte")
}

if (typeof paiementDatas.cb_expiration !== "string" ){
    errors.push ("Vous devez renseigner le mois et l'année d'expiration de votre carte : MM/AAAA")
}  // Attention : le text affiché ds le nav google n'est pas adapté au format firefox (trop ancien)=> quoi faire ?  => mettre une indication (ex: "ouvrez votre fomruaire dans google chrome" ?)

//console.log(errors);


//ok____errors_ccv_cb_security______________ ts+HTML
if (typeof paiementDatas.cb_security == "string") {
    const cb_security = paiementDatas.cb_security.trim();

    const isValidSecurityCode = /^[0-9]{3}$/.test(cb_security); //RegExp champs = 3 chiffres exactement

    if (!isValidSecurityCode) {
        errors.push("Vous devez saisir un code de sécurité de 3 chiffres");
    }


// if (cb_security.length <3) {
//     errors.push ("Vous devez saisir un code de sécurité de 3 chiffres")
// }

// if (cb_security.length >3) {
//     errors.push ("Vous devez saisir un code de sécurité de 3 chiffres")
// }

}

    console.log("paiement soumis : ", paiementDatas);
    alert("paiement soumis avec succès")
  
});
}




//____algo de Luhn__________
function X (cb_number) {
    //ici intégrer algo de Lhun
    return true
}


