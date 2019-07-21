for(let i = 0; i<16; i++) {
    for(let j = 0; j<16; j++) {
        const div = document.createElement("div");
        div.className = "square";
        // div.style.width = "25px";
        // div.style.height = "25px";
        // div.style.background = "red";
        document.querySelector(".gridContainer").appendChild(div);
    }
    const newRow = document.createElement("br");
    document.querySelector(".gridContainer").appendChild(newRow);
}
let squares = document.querySelectorAll(".square");
for(let square of squares) {
    square.addEventListener("mouseover", () => {
        square.classList.add("blueBackground");
    })
};