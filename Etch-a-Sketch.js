const generateGrid = (input) => {

    let container = document.querySelector(".container");

    for (i = 0; i < input; i++) {

        let row = document.createElement("div");
        row.classList.add("row");
        row.style.width = "100%";
        row.style.display = "flex";

        container.appendChild(row);

        for (j = 0; j < input; j++) {
            let square = generateSquare(960 / input);
            row.appendChild(square);

        }


    }

}

const generateSquare = (pixels) => {

    let square = document.createElement("div");

    square.classList.add("square");
    square.style.width = pixels + "px";
    square.style.height = pixels + "px";
    square.style.boxSizing = "border-box";
    square.style.borderStyle = "solid";
    square.style.borderColor = "red";
    square.style.alignSelf = "start";

    square.addEventListener("mouseover", (e) => changeColor(e.target));
    return square;

}

const changeColor = (square) => {

    square.style.backgroundColor = "black";
}

const clearContainer = (container) => {

    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }

}

const generateRandomNumber = () => {
    return Math.floor(Math.random() * 256);
}

function start() {

    let container = document.querySelector(".container");
    let button = document.querySelector(".create-grid");

    button.addEventListener("click", () => {

        clearContainer(container);
        let gridValue = parseInt(prompt("Enter how many squares should be on each side of the grid (maximum 100)"));

        if (gridValue < 100) {
            generateGrid(gridValue);
        } else {
            generateGrid(100);
        }

    });

}

start();

