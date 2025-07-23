const paiementForm = document.getElementById ("paiementform") as HTMLFormElement;
paiementForm.addEventListener("submit", (event) => {
    event?.preventDefault();

    const formData = new FormData(paiementForm);

    const paiementDatas = {
        cb_name: formData.get("cb_name"),
        cb_types: formData.get("cb_types"),
        cb_number: formData.get("cb_number"),
        cb_expiration: formData.get("cb_expiration"),
        cb_security: formData.get("cb_security")
    }

    // console.log(paiementDatas);
    
    const errors: string[]= []
    if (typeof paiementDatas.cb_name == "string" ) {  /* && paiementDatas.cb_name.length <= 3*/ 
        const namecb = paiementDatas.cb_name.trim();

    if (namecb.length <3) {
        errors.push("le nom sur la carte deit contenir au moins 3 caratères.");
        }
    
    if (namecb !== namecb.toUpperCase()) {
        errors.push("Le nom sur la carte doit être en majuscules.")
    }
    
    console.log(errors);
    // !!!! ds HTML ajouter les condition cb_name en UpperCase !!!!! 

    }


});
