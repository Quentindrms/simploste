// STOCKAGE LOCAL STORAGE NAVIGATEUR  :


// stocker qq chose dans localStorage avec un id unique :
export function setInfosVoyageur(info: string, id: number): void {
  localStorage.setItem(`voyageur_${id}`, info);
}

// récupérer une info de localStorage par id :
export function getInfoVoyageur(id: number): string | null {
  return localStorage.getItem(`voyageur_${id}`);
}

