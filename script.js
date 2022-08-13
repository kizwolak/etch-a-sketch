function sixteen() {
    for (i = 0; i < 64; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (j = 0; j < 64; j++) {
            let box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);
            function colour() {
                box.classList.add('newbox');
            }
            box.addEventListener('mousedown', colour);

            let reset = document.querySelector("#reset");

            let allBoxes = document.querySelector(".container").querySelectorAll(".box")
            
            function clear() {
                allBoxes.forEach(box => {
                    box.classList.remove('newbox');
                })
            }

            reset.addEventListener('click', clear);

        }
        document.querySelector(".container").appendChild(row);
    }

}

sixteen();

