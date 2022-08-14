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

let squares = 50;

const container = document.querySelector(".container")
container.style.setProperty('grid-template-columns', 'repeat(' + squares + ', auto)');

function draw() {
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

draw();

let reset = document.querySelector("#reset");

function clear() {
    allBoxes.forEach(box => {
        box.classList.remove('newbox');
    });
}

reset.addEventListener('click', clear);



let allBoxes = document.querySelector(".container").querySelectorAll(".box");

let allRows = document.querySelector(".container").querySelectorAll(".row");



function deleteDraw() {
    
    let allBoxes = document.querySelector(".container").querySelectorAll(".box");

    let allRows = document.querySelector(".container").querySelectorAll(".row");

    allRows.forEach(row => {
        row.remove();
    });
    allBoxes.forEach(box => {
        box.remove();
    });

    squares = 0;

    container.style.setProperty('grid-template-columns', 'repeat(' + 0 + ', auto)');

    squares = ask();

    container.style.setProperty('grid-template-columns', 'repeat(' + squares + ', auto)');

    draw();

    let reset = document.querySelector("#reset");

    allBoxes = document.querySelector(".container").querySelectorAll(".box");

    allRows = document.querySelector(".container").querySelectorAll(".row");

    function clear() {
    allBoxes.forEach(box => {
        box.classList.remove('newbox');
    });  
    }   

    reset.addEventListener('click', clear);

} 

function makeNew() {
    allRows.forEach(row => {
        row.remove();
    })
    allBoxes.forEach(box => {
        box.remove();
    })

    squares = 0;

    deleteDraw();
}

let newGrid = document.querySelector('#newgrid');

newGrid.addEventListener('mousedown', makeNew);
