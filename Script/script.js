let boutons = document.getElementsByClassName('card');
let premiereImage = document.querySelector('.card img');

function cardSelect() {
    premiereImage.style.opacity = 1;
}

for (let bouton of boutons) {
    bouton.addEventListener('click', cardSelect);
}

