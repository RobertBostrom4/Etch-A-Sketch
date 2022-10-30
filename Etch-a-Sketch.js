const generateGrid = () => {

    let container = document.querySelector(".container");

    for (i = 0; i < 16; i++) {

        let row = document.createElement("div");
        row.classList.add("row");
        row.style.width = "100%";
        row.style.display = "flex";

        container.appendChild(row);

        for (j = 0; j < 16; j++) {
            let square = generateSquare();
            row.appendChild(square);

        }


    }

}

const generateSquare = () => {

    let square = document.createElement("div");

    square.classList.add("square");
    square.style.width = "20px";
    square.style.height = "20px";
    square.style.boxSizing = "border-box";
    square.style.borderStyle = "solid";
    square.style.borderColor = "red";
    square.style.alignSelf = "start";

    square.addEventListener("mouseover", (e) => changeColor(e.target));

    return square;

}

let changeColor = (square) => {

    square.style.backgroundColor = "black";
}

generateGrid();
