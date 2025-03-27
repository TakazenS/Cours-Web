let envoyer = document.getElementById('envoyer');
let emptyInput = document.getElementById('empty-input');
let heightError = document.getElementById('height-error');
envoyer.addEventListener('click', calcVolume);

function calcVolume() {
    let prenom = document.getElementById('prenom');
    prenom = prenom.value;

    let nom = document.getElementById('nom');
    nom = nom.value;

    let surface = document.getElementById('surface');
    surface = parseInt(surface.value);
    
    let epaisseur = document.getElementById('epaisseur');
    epaisseur = parseInt(epaisseur.value);

    if ((prenom === '' || nom === '') || (isNaN(surface) || isNaN(epaisseur))) {
        heightError.style.display = 'none';
        emptyInput.style.display = 'flex';
        envoyer.style.marginTop = '12px';
        return;
    } else {
        emptyInput.style.display = 'none';
        envoyer.style.marginTop = '20px';
    };

    if (epaisseur < 15 || epaisseur > 35) {
        emptyInput.style.display = 'none';
        heightError.style.display = 'flex';
        envoyer.style.marginTop = '12px';
        return;
    } else {
        heightError.style.display = 'none';
        envoyer.style.marginTop = '20px';
    };

    //350Kg
    const dosage = 350;
    //91€/m3
    const prixMcube = 91;

    //m3
    let volumeBeton = parseFloat(surface * epaisseur / 100);

    //Kg
    let qteCiment = (volumeBeton * dosage) / 1000;

    let nbCamion = parseInt(Math.ceil(volumeBeton / 9));

    let prixHT = volumeBeton * prixMcube;

    let prixTTC = prixHT + 140 * nbCamion;
}

