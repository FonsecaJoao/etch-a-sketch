const grid = document.getElementById('grid');
const clear = document.getElementById('clear');

function buildGrid() {
    let div = document.createElement('div');
    for (let i = 0; i < 256; i++) {
        div = document.createElement('div');
        grid.appendChild(div);
        div.className = 'sqr';
        div.setAttribute('id', 'sqr');
        div.addEventListener('mouseover', hover);
    }
};

function hover() {
    this.style.background = 'black';
}

function clearGrid() {
    const sqr = document.querySelectorAll('#sqr');
    for (let i = 0; i <  sqr.length; i++) {
        sqr[i].style.background = 'aquamarine'; 
    }
}

clear.addEventListener('click', clearGrid);

buildGrid();