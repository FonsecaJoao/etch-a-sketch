const grid = document.getElementById('grid');

function buildGrid() {
    let div = document.createElement('div');
    for (let i = 0; i < 256; i++) {
        div = document.createElement('div');
        grid.appendChild(div);
        div.className = 'sqr';
    }
};

buildGrid();