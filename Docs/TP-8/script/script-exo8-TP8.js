let envoyer = document.getElementById('envoyer');
envoyer.addEventListener('click', calcVolume);
let retourForm = document.getElementById('to-form');
retourForm.addEventListener('click', backToForm);
let zoneDevis = document.getElementById('zone-devis');
let centerZone = document.getElementById('center-zone');
let emptyInput = document.getElementById('empty-input');
let heightError = document.getElementById('height-error');
let prenom = document.getElementById('prenom');
let nom = document.getElementById('nom');
let surface = document.getElementById('surface');
let epaisseur = document.getElementById('epaisseur');

//91€/m3
const prixMcube = 91;
let prixCamion = 140;

let ligne1 = document.getElementById('tableau').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[0];

let prixm3Tab = ligne1.getElementsByTagName('th')[1];
prixm3Tab.textContent = `${prixMcube} €`;

let qtem3Tab = ligne1.getElementsByTagName('th')[2];

let prixhtTab = ligne1.getElementsByTagName('th')[3];

let ligne2 = document.getElementById('tableau').getElementsByTagName('tbody')[0].getElementsByTagName('tr')[1];

let prixcamionTab = ligne2.getElementsByTagName('th')[1];
prixcamionTab.textContent = `${prixCamion} €`;

let qteCamionTab = ligne2.getElementsByTagName('th')[2];

let prixCamionTab = ligne2.getElementsByTagName('th')[3];

let sousTotal = document.getElementById('sous-total');

let tvaValue = document.getElementById('tva');

let totalValue = document.getElementById('total');

let dateValue = document.getElementById('date-devis');

function calcVolume() {
    prenom = prenom.value;
    nom = nom.value;
    surface = parseFloat(surface.value);
    epaisseur = parseInt(epaisseur.value);

    let fullNameCli = document.getElementById('full-name-cli');

    if ((prenom === '' || nom === '') || (isNaN(surface) || isNaN(epaisseur) || (surface === undefined || epaisseur === undefined))) {
        heightError.style.display = 'none';
        emptyInput.style.display = 'flex';
        envoyer.style.marginTop = '12px';
        prenom = '';
        nom = '';
        surface = '';
        epaisseur = '';
        return;
    } else {
        emptyInput.style.display = 'none';
        envoyer.style.marginTop = '20px';
    };

    if (epaisseur < 15 || epaisseur > 35) {
        emptyInput.style.display = 'none';
        heightError.style.display = 'flex';
        envoyer.style.marginTop = '12px';
        prenom = '';
        nom = '';
        surface = '';
        epaisseur = '';
        return;
    } else {
        heightError.style.display = 'none';
        envoyer.style.marginTop = '20px';
    };
    
    //m3
    let volumeBeton = parseFloat(surface * epaisseur / 100);
    qtem3Tab.textContent = `${volumeBeton.toFixed(2)} m3`;

    let nbCamion = parseInt(Math.ceil(volumeBeton / 9));
    qteCamionTab.textContent = `${nbCamion}`;

    let prixAllCamion = nbCamion * prixCamion;
    prixCamionTab.textContent = `${prixAllCamion.toFixed(2)} €`;

    let prixHT = volumeBeton * prixMcube;
    prixhtTab.textContent = `${prixHT.toFixed(2)} €`;

    let prixTTC = prixHT + prixCamion * nbCamion;
    sousTotal.textContent = `Sous total : ${prixTTC.toFixed(2)} €`

    let tva = 20 * prixTTC / 100;
    tvaValue.textContent = `TVA (20%) : ${tva.toFixed(2)} €`;

    let totalWtva = tva + prixHT;
    totalValue.textContent = `TOTAL : ${totalWtva.toFixed(2)} €`;

    fullNameCli.textContent = `${nom.toUpperCase()} ${prenom.toUpperCase()}`;

    let now = new Date();
    let annee = now.getFullYear();
    let mois = String(now.getMonth() + 1).padStart(2, '0');
    let jour = String(now.getDate()).padStart(2, '0');

    dateValue.innerHTML += `${jour}/${mois}/${annee}`;

    centerZone.style.display = 'none';
    zoneDevis.style.display = 'flex';
    return;
}

function backToForm() {
    prenom = '';
    nom = '';
    surface = '';
    epaisseur = '';
    zoneDevis.style.display = 'none';
    centerZone.style.display = 'flex';
    return;
}

