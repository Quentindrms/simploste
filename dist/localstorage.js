// stocker qq chose ds localstorage :
// stocker qq chose dans localStorage avec un id unique :
export function getInfosVoyageur(info, id) {
    localStorage.setItem(`voyageur_${id}`, info);
}
// récupérer une info de localStorage par id :
export function setInfoVoyageur(id) {
    return localStorage.getItem(`voyageur_${id}`);
}
