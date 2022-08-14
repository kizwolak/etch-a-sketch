function ask() {
    let squares = prompt("How big do you want it, boss?");
    if (squares > 100) {
        alert("That's too large, boss!");
        return ask();
    }
    else if (squares <= 0) {
        alert("That's too little, boss!");
        return ask();
    }
    else {
        return squares;
    }
}

let squares = ask();

const container = document.querySelector(".container")
container.style.setProperty('grid-template-columns', 'repeat(' + squares + ', auto)');

for (i = 0; i < squares; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (j = 0; j < squares; j++) {
            let box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);
            function colour() {
                box.classList.add('newbox');
            }
            box.addEventListener('mousedown', colour);
        }
        document.querySelector(".container").appendChild(row);
}

let reset = document.querySelector("#reset");

let allBoxes = document.querySelector(".container").querySelectorAll(".box");

let allRows = document.querySelector(".container").querySelectorAll(".row");

function clear() {
    allBoxes.forEach(box => {
        box.classList.remove('newbox');
    })
}

reset.addEventListener('click', clear);

function makeNew() {
    allRows.forEach(row => {
        row.remove();
    })
    allBoxes.forEach(box => {
        box.remove();
    })

    let squares = ask();

    container.style.setProperty('grid-template-columns', 'repeat(' + squares + ', auto)');

    for (i = 0; i < squares; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (j = 0; j < squares; j++) {
            let box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);
            function colour() {
                box.classList.add('newbox');
            }
            box.addEventListener('mousedown', colour);
        }
        document.querySelector(".container").appendChild(row);
    }
}

let newGrid = document.querySelector('#newgrid');

newGrid.addEventListener('mousedown', makeNew);
