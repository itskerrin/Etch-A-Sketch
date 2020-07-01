let container = document.querySelector('.container');
let blackButton = document.querySelector('#black');
let rainbowButton = document.querySelector('#rainbow');
let clearBoard = document.querySelector('#clear');

document.addEventListener('DOMContentLoaded', createGrid(16));
blackButton.addEventListener('click', blackGrid);
rainbowButton.addEventListener('click', rainbowGrid);
clearBoard.addEventListener('click', function() {
    let num = prompt('Please choose your grid size', '16');
    num = num === '' ? 16 : num;
    createGrid(num);

})

function blackGrid() { colorMode('black'); }
function rainbowGrid() { colorMode('rainbow'); }

function colorMode(mode) {
    const divs = document.querySelectorAll('.container div');
    switch (mode) {
        case 'black':
            divs.forEach(pixel => pixel.removeEventListener('mouseover', rainbowSquare));
            divs.forEach(pixel => pixel.addEventListener('mouseover', blackSquare));
            rainbowButton.classList.remove('active');
            blackButton.classList.add('active');
            break;
        case 'rainbow':
            divs.forEach(pixel => pixel.removeEventListener('mouseover', blackSquare));
            divs.forEach(pixel => pixel.addEventListener('mouseover', rainbowSquare));
            blackButton.classList.remove('active');
            rainbowButton.classList.add('active');
            break;
    }}

    function blackSquare(e) {
        e.target.style.backgroundColor = 'rgb(0, 0, 0)';
        e.target.style.border = 'none';
    }

    function rainbowSquare(e) {
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        e.target.style.border = 'none';
    }

    function createGrid(num = 16) {
        container.innerHTML = '';
    
        container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
        container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    
        for (let rows = 0; rows < num; rows++) {
            for (let cols = 0; cols < num; cols++) {
                const div = document.createElement('div');
                container.appendChild(div);
            }
        }
    
        blackGrid(); }