export class LocalStorage {
    setInfoVoyageur(objVoyageur, bookingNumber) {
        localStorage.setItem(bookingNumber, JSON.stringify(objVoyageur));
        console.log(`Voyageur : ${localStorage.getItem('Voyager')}`);
    }
    getInfoVoyageur() {
        console.log(`Affichage des infos localStorage : ${localStorage.getItem('Voyager')}`);
    }
    /** Pour ne pas avoir deux cléfs similiares dans le local storage ajout de
     * TRVL devant le bookingNumber pour indiqué qu'il s'agit de l'ID voyage (travel => trvl)
     */
    setInfoVoyage(objVoyage, bookingNumber) {
        localStorage.setItem(`TRVL-${bookingNumber}`, JSON.stringify(objVoyage));
        console.log(`Stockage voyage : ${localStorage.getItem('Voyage')}`);
    }
}
