document.getElementById('envoyer').addEventListener('click', calcVolume());

function calcVolume() {
    let prenom = document.getElementById('prenom');
    prenom = prenom.value;

    let nom = document.getElementById('nom');
    nom = nom.value;

    let surface = document.getElementById('surface');
    surface = surface.value;
    
    let epaisseur = document.getElementById('epaisseur');
    epaisseur = epaisseur.value;

    do {

        if (epaisseur < 15) {
            let alert = document.getElementById('formulaire');
            alert.insertAdjacentElement('beforeend', "<p>L'epaisseur ne doit pas être inferieure à 15cm</p>");
        } else if (epaisseur > 35) {
            window.alert(`Valeur trop élevée !`);
        };

    } while (epaisseur < 15 || epaisseur > 35);

    const dosage = 350;
    const prixMcube = 91;

    let volumeBeton = parseFloat(surface * epaisser / 100);

    let qteCiment = (volumeBeton * dosage) / 1000;

    let nbCamion = parseInt(Math.ceil(volumeBeton / 9));

    let prixHT = volumeBeton * prixMcube;

    let prixTTC = prixHT + 140 * nbCamion;
}

