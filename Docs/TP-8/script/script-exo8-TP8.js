document.addEventListener("DOMContentLoaded", function() {
    let envoyer = document.getElementById('envoyer');
    let toForm = document.getElementById('to-form');
    let toPDF = document.getElementById('to-pdf');

    envoyer.addEventListener("click", calcVolume);
    toForm.addEventListener('click', backToForm);
    toPDF.addEventListener('click', exporterPDF);
});


let centerZone = document.getElementById('center-zone');
let zoneDevis = document.getElementById('zone-devis');
let header = document.getElementById('menu_bar');
let emptyInput = document.getElementById('empty-input');
let heightError = document.getElementById('height-error');
let ligne1 = document.getElementById('tableau').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0];
let ligne2 = document.getElementById('tableau').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[1];

function calcVolume() {
    const prixMcube = 91;
    let prixCamion = 140;
    let prixm3Tab = ligne1.getElementsByTagName('th')[1];
    prixm3Tab.textContent = `${prixMcube} € / m3`;
    let prixcamionTab = ligne2.getElementsByTagName('th')[1];
    prixcamionTab.textContent = `${prixCamion} € / Camion`;

    let prenom = document.getElementById('prenom');
    prenom = prenom.value;
    let nom = document.getElementById('nom');
    nom = nom.value;
    let surface = document.getElementById('surface');
    surface = parseFloat(surface.value);
    let epaisseur = document.getElementById('epaisseur');
    epaisseur = parseInt(epaisseur.value);

    if ((prenom === '' || nom === '') || (!isNaN(Number(prenom)) || !isNaN(Number(nom))) || (isNaN(surface) || isNaN(epaisseur) || (surface === undefined || epaisseur === undefined))) {
        heightError.style.display = 'none';
        emptyInput.style.display = 'flex';
        envoyer.style.marginTop = '12px';
        return;
    } else {
        emptyInput.style.display = 'none';
        envoyer.style.marginTop = '35px';
    };

    if (epaisseur < 15 || epaisseur > 35) {
        emptyInput.style.display = 'none';
        heightError.style.display = 'flex';
        envoyer.style.marginTop = '12px';
        return;
    } else {
        heightError.style.display = 'none';
        envoyer.style.marginTop = '35px';
    };
    
    let volumeBeton = parseFloat(surface * epaisseur / 100);
    let qtem3Tab = ligne1.getElementsByTagName('th')[2];
    qtem3Tab.textContent = `${volumeBeton.toFixed(2)} m3`;

    let nbCamion = parseInt(Math.ceil(volumeBeton / 9));
    let qteCamionTab = ligne2.getElementsByTagName('th')[2];
    qteCamionTab.textContent = `${nbCamion}`;

    let prixAllCamion = nbCamion * prixCamion;
    let prixCamionTab = ligne2.getElementsByTagName('th')[3];
    prixCamionTab.textContent = `${prixAllCamion.toFixed(2)} €`;

    let prixHT = volumeBeton * prixMcube;
    let prixhtTab = ligne1.getElementsByTagName('th')[3];
    prixhtTab.textContent = `${prixHT.toFixed(2)} €`;

    let prixTTC = prixHT + prixCamion * nbCamion;
    let sousTotal = document.getElementById('sous-total');
    sousTotal.textContent = `Sous total : ${prixTTC.toFixed(2)} €`

    let tva = 20 * prixTTC / 100;
    let tvaValue = document.getElementById('tva');
    tvaValue.textContent = `TVA (20%) : ${tva.toFixed(2)} €`;

    let totalWtva = tva + prixHT;
    let totalValue = document.getElementById('total');
    totalValue.textContent = `TOTAL : ${totalWtva.toFixed(2)} €`;

    let fullNameCli = document.getElementById('full-name-cli');
    fullNameCli.textContent = `${nom.toUpperCase()} ${prenom.toUpperCase()}`;

    let now = new Date();
    let annee = now.getFullYear();
    let mois = String(now.getMonth() + 1).padStart(2, '0');
    let jour = String(now.getDate()).padStart(2, '0');

    let dateValue = document.getElementById('date-devis');
    dateValue.innerHTML += `${jour}/${mois}/${annee}`;

    centerZone.style.display = 'none';
    header.style.display = 'none'
    zoneDevis.style.display = 'flex';
    return;
}

function exporterPDF() {
    window.print();
    return;
}

function backToForm() {
    zoneDevis.style.display = 'none';
    centerZone.style.display = 'flex';
    header.style.display = 'flex'
    envoyer.style.marginTop = '35px';
    return;
}

