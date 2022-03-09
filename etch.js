
const container = document.querySelector ('#container');
const btn = document.querySelector ('#clear');
const box = document.getElementsByClassName ('box');
let gridSize = "";

btn.addEventListener ('click', clearPopulate);

function clearPopulate() {

    gridSize = prompt ("Grid size?");

    while (gridSize > 100) {
        alert("That's too big! Try something smaller than 100");
        gridSize = prompt ("Grid size?");
    }
    
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    populateGrid(gridSize);

};

function populateGrid (gridSize) {
  
    for (let row = 0; row < gridSize; row++) {

        const boxCol = document.createElement ('div');
        boxCol.classList.add ('column');
        container.appendChild(boxCol);

        const oneBox = document.createElement ('div');
        oneBox.classList.add ('box');
        oneBox.style.border = 'thin solid #000000';

        for (let col = 0; col < gridSize; col++) {

            boxCol.appendChild (oneBox.cloneNode(true));
        }
    }

    for (i = 0; i < box.length; i++) {
        box[i].addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'blue';
        });
    }
  
}