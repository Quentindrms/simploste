// stocker qq chose ds localstorage :


// stocker qq chose dans localStorage avec un id unique :
export function getInfosVoyageur(info: string, id: number): void {
  localStorage.setItem(`voyageur_${id}`, info);
}

// récupérer une info de localStorage par id :
export function setInfoVoyageur(id: number): string | null {
  return localStorage.getItem(`voyageur_${id}`);
}

