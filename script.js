let squares = prompt('How many squares, boss?');
if (squares > 100) {
    alert('Not that much, boss!')
}


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

let allBoxes = document.querySelector(".container").querySelectorAll(".box")

function clear() {
    allBoxes.forEach(box => {
        box.classList.remove('newbox');
    })
}

reset.addEventListener('click', clear);


