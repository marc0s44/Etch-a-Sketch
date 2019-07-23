createGrid();
// for(let i = 0; i<16; i++) {
//     for(let j = 0; j<16; j++) {
//         const div = document.createElement("div");
//         div.className = "square";
//         // div.style.width = "25px";
//         // div.style.height = "25px";
//         // div.style.background = "red";
//         document.querySelector(".gridContainer").appendChild(div);
//     }
//     const newRow = document.createElement("br");
//     document.querySelector(".gridContainer").appendChild(newRow);
// }
//let squares = document.querySelectorAll(".square");
let newLine = document.querySelectorAll("br");
// for(let square of squares) {
//     square.addEventListener("mouseover", () => {
//         square.classList.add("blueBackground");
//     });
// }
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
            div.style.width = `${420/(columns)-3}px`;
            div.style.height = `${415/(rows)-3}px`;
            document.querySelector(".gridContainer").appendChild(div);
        }
        const newRow = document.createElement("br");
        document.querySelector(".gridContainer").appendChild(newRow);
    }
    squares = document.querySelectorAll(".square");
}
function deleteGrid () {
    let myNode = document.querySelector(".gridContainer");
    while(myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
}