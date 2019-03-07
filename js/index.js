let grid = document.getElementById('grid');
const clear = document.getElementById('clear');
const pixel = document.getElementById('pixel');



function buildGrid() {
    grid.innerHTML = '';
    if (pixel.value % 2 !== 0) {
        alert('Select only even numbers please!');
    } else {
        const margin = pixel.value * 2;
        const border = pixel.value * 2;
        const sumMarginAndBorder = margin + border;
        const fitInGrid = 500 - sumMarginAndBorder;
        const measurePixel = fitInGrid / pixel.value;
        const sqrLength = pixel.value * pixel.value;
        let div = document.createElement('div');
        for (let i = 0; i < sqrLength; i++) {
            div = document.createElement('div');
            grid.appendChild(div);
            div.className = 'sqr';
            div.setAttribute('id', 'sqr');
            div.addEventListener('mouseover', hover);
        }
        for (let i = 0; i < sqrLength; i++) {
            const sqr = document.querySelectorAll('#sqr');
            sqr[i].style.height = '' + measurePixel + 'px';
            sqr[i].style.width = '' + measurePixel + 'px';
        }
    }
};

function hover() {
    this.style.background = 'black';
}

function clearGrid() {
    const sqr = document.querySelectorAll('#sqr');
    for (let i = 0; i <  sqr.length; i++) {
        sqr[i].style.backgroundColor = 'aquamarine';
    }
}

clear.addEventListener('click', clearGrid);