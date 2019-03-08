let grid = document.getElementById('grid');
const clear = document.getElementById('clear');
const pixel = document.getElementById('pixel');

function buildGrid() {
    grid.innerHTML = '';
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
        sqr[i].style.height = '' + measurePixel.toFixed(2) + 'px';
        sqr[i].style.width = '' + measurePixel.toFixed(2) + 'px';
    }
};

function hover() {
    this.style.backgroundColor = getRandomRgb();
    let currentOpacity = +this.style.opacity;
        if(currentOpacity < 1){
            currentOpacity += 0.15;
        }
        this.style.opacity = currentOpacity;
}

function clearGrid() {
    const sqr = document.querySelectorAll('#sqr');
    for (let i = 0; i <  sqr.length; i++) {
        sqr[i].style.backgroundColor = 'aquamarine';
    }
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

clear.addEventListener('click', clearGrid);