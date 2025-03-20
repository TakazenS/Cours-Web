let surface = pass/*input*/;

do {
    let epaisseur = pass/*input*/;
    if (epaisseur < 15) {
        window.alert(`Valeur trop faible !`);
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


