export class LocalStorage {
    setInfoVoyageur(objVoyageur) {
        localStorage.setItem('Voyager', JSON.stringify(objVoyageur));
        console.log(`Voyageur : ${localStorage.getItem('Voyager')}`);
    }
    getInfoVoyageur() {
        console.log(`Affichage des infos localStorage : ${localStorage.getItem('Voyager')}`);
    }
}
