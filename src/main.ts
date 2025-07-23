// Fonction d'échappement HTML
function escapeHTML(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Submit " sur le formulaire "
const form = document.getElementById('form-title') as HTMLFormElement;

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Empêche le rechargement inutile de la page
    submitForm();
  });
}

function submitForm() {
  console.log('Formulaire soumis (submit)');
  // console log controle
}

// BTN généré:
document.getElementById("generate-summary-btn")?.addEventListener("click", () => {
  const prenom = escapeHTML((prompt("Prénom ?") || "").substring(0, 50));
  const nom = escapeHTML((prompt("Nom ?") || "").substring(0, 50));
  const destination = escapeHTML((prompt("Ville d'arrivée ?") || "").substring(0, 50));
  const classe = escapeHTML((prompt("Classe de voyage ? (economy, business, first)") || "").substring(0, 20));

  alert(`Résumé généré :
Prénom : ${prenom}
Nom : ${nom}
Ville d'arrivée : ${destination}
Classe : ${classe}`);
  });
  
