let negative = 0;
let x = '';
let y = '';
while (negative != 1) {
    x = parseFloat(prompt('Entrez une valeur pour la longueur'));
    y = parseFloat(prompt('Entrez une valeur pour la largeur'));
    if (x >= 0 && y >= 0) {
        negative = 1;
        break;
    }
    negativeValue = alert('Vous ne pouvez pas entrer des nombres négatifs !')
}

let question = confirm(`Ces valeurs vous vont-elles : x = ${x} et y = ${y}`);
if (question != true) {
    while (question != true) {
        let x = parseFloat(prompt('Entrez une valeur pour la longueur'));
        let y = parseFloat(prompt('Entrez une valeur pour la largeur'));

        question = confirm(`Ces valeurs vous vont-elles : x = ${x} et y = ${y} ?`);
    }
}

function rect(x, y) {
    return x * y
}

let surface = document.write(`La surface de votre rectangle est de ${rect(x, y)}m² !`);
