let position = ['1', '2', '3', '4', '5', '6', '7', '8', '..'];
let numbers = document.getElementById('btn-box');
let resetButton = document.querySelector('.reset-game');
let selectedNumber = document.querySelector('#btn');

function changePosition(event) {
    let newPos = position.indexOf(event.target.innerText);
    let emptyPos = position.indexOf('..');

    switch (emptyPos - newPos) {
        case -1:
            position[emptyPos] = event.target.innerText;
            position[newPos] = '..'
        case 1:
            position[emptyPos] = event.target.innerText;
            position[newPos] = '..'
        case 3:
            position[emptyPos] = event.target.innerText;
            position[newPos] = '..'
        case -3:
            position[emptyPos] = event.target.innerText;
            position[newPos] = '..'
    }
    deleAll();
    for (let i = 0; i < position.length; i++) {
        createDiv(i);
    }
}

const shuffleArray = (arr) =>
    arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

function deleAll() {
    while (numbers.firstChild) {
        numbers.firstChild.remove();
    }
}

function resetGame() {
    deleAll();
    position = shuffleArray(position);
    console.log(position);
    for (let i = 0; i < position.length; i++) {
        createDiv(i);
    }
}

function createDiv(i) {
    let divNew = document.createElement('div');
    let content = position[i];
    divNew.innerText = content;
    divNew.setAttribute('id', 'btn')
    if (position[i] === '..') {
        divNew.setAttribute('class', 'empty-box')
    }
    numbers.appendChild(divNew);
}

numbers.addEventListener('click', changePosition);
resetButton.addEventListener('click', resetGame);