const generateGrid = (input, buttonOption) => {

    let container = document.querySelector(".container");

    for (i = 0; i < input; i++) {

        let row = document.createElement("div");
        row.classList.add("row");
        row.style.width = "100%";
        row.style.display = "flex";

        container.appendChild(row);

        for (j = 0; j < input; j++) {
            let square = generateSquare(960 / input, buttonOption);
            row.appendChild(square);

        }


    }

}

const generateSquare = (pixels, buttonOption) => {

    let square = document.createElement("div");

    square.classList.add("square");
    square.style.width = pixels + "px";
    square.style.height = pixels + "px";
    square.style.boxSizing = "border-box";
    square.style.borderStyle = "solid";
    square.style.borderColor = "red";
    square.style.alignSelf = "start";
    square.style.backgroundColor = "rgb(255,255,255)";

    square.addEventListener("mouseover", (e) => changeColor(e.target, buttonOption));
    return square;

}

const changeColor = (square, buttonOption) => {

    if (buttonOption.id == "blackAndWhite") {
        square.style.backgroundColor = "black";
    }

    if (buttonOption.id == "randomColors") {
        square.style.backgroundColor = "rgb(" + generateRandomNumber() + "," + generateRandomNumber() + "," + generateRandomNumber() + ")";
    }

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
    let buttons = document.querySelectorAll(".create-grid");

    buttons.forEach(button => button.addEventListener("click", () => {

        clearContainer(container);
        let gridValue = parseInt(prompt("Enter how many squares should be on each side of the grid (maximum 100)"));

        if (gridValue < 100) {
            generateGrid(gridValue, button);
        } else if (gridValue >= 100) {
            generateGrid(100, button);
        }

    })
    );
}

start();

