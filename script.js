function sixteen() {
    for (i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (j = 0; j < 16; j++) {
            let box = document.createElement("div");
            box.className = "box";
            row.appendChild(box);
            function colour() {
                box.classList.add('newbox');
            }
            box.addEventListener('mouseover', colour);
        }
        document.querySelector(".container").appendChild(row);
    }

}

sixteen();



