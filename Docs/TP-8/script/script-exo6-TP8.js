showTable();

const reset = document.querySelector('.reset');
reset.addEventListener('click', showTable);
    
function showTable() {

    let value = parseInt(window.prompt('Quel table souhaitez vous afficher ?'));
    let table = [];
    if (value < 0) {
        alert('Vous ne pouvez pas chercher une table négative !')
    } else {

        let multi = 0;
        while (multi != 10) {
            table.push(`${value} * ${multi + 1} = ${value * (multi + 1)}`);
            let addElement = document.getElementById(`${multi}`);
            addElement.innerHTML = `${table[multi]}`;
            multi++;
        };

    };

};
