// Sélection du bouton
const button = document.getElementById('mode-toggle');

// Vérifie le thème sauvegardé dans localStorage
if (localStorage.getItem('theme') === 'night') {
    activerModeNuit();
} else {
    button.textContent = '🌙';
}

// Ajout d'un écouteur d'événement sur le bouton
button.addEventListener('click', () => {
    let nightModeLink = document.getElementById('night-mode-style');

    if (!nightModeLink) {
        // Activer le mode nuit
        activerModeNuit();
        localStorage.setItem('theme', 'night'); // Sauvegarde dans localStorage
    } else {
        // Désactiver le mode nuit
        nightModeLink.remove();
        button.textContent = '🌙';
        localStorage.setItem('theme', 'day'); // Sauvegarde dans localStorage
    }
});

// Fonction pour activer le mode nuit
function activerModeNuit() {
    let nightModeLink = document.createElement('link');
    nightModeLink.rel = 'stylesheet';
    nightModeLink.href = 'style2.css';
    nightModeLink.id = 'night-mode-style';
    document.head.appendChild(nightModeLink);

    // Change l'icône du bouton
    button.textContent = '☀️';
}
//
//
//
//
// On sélectionne le bouton avec son ID
const bouton = document.getElementById('button');

// On ajoute un "écouteur d'événement" pour détecter le clic
bouton.addEventListener('click', function() {
  // Affiche un message dans une boîte d'alerte
  alert('Merci beaucoup, votre demande a bien été prise en compte !');
});

