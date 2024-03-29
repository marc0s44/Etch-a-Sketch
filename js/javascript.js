createGrid();
let newLine = document.querySelectorAll("br");
const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
    for(let square of squares) {
        square.style.backgroundColor = "rgb(255, 255, 255)";
    }
    let rows;
    let columns;
    do{
        rows = prompt("Enter how many rows do you want to have in your grid");
        columns = prompt("Enter how many columns do you want to have in your grid");
        if(rows<=0 || columns <=0 || isNaN(rows) || isNaN(columns)) {
            console.log("Enter number higher than 0");
        }
    }while(rows<=0 || columns<=0 || isNaN(rows) || isNaN(columns));
    deleteGrid();
    createGrid(Number(rows),Number(columns));
    });
const defautColorButton = document.querySelector("#defaultColor");
defautColorButton.addEventListener("click", () => {
    for(let square of squares) {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "rgb(0, 0, 255)"
        });
    }
});
function generateRandomColor () {

    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}
const randomColorsButton = document.querySelector("#randomColors");
randomColorsButton.addEventListener("click", ()=> { 
    for(let square of squares) {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = generateRandomColor();
        });
    }
});
function createGrid (rows=16, columns=16) {
    for(let i = 0; i<rows; i++) {
        for(let j = 0; j<columns; j++) {
            let div = document.createElement("div");
            div.className = "square";
            document.querySelector(".gridContainer").appendChild(div);
        }
    }
    const gridContainer = document.querySelector(".gridContainer");
    gridContainer.style.gridTemplateColumns = `repeat(${columns},auto)`;
    squares = document.querySelectorAll(".square");
}
function deleteGrid () {
    let myNode = document.querySelector(".gridContainer");
    while(myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}