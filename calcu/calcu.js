const resultado = document.getElementById('resul');
const numeros = document.getElementById('numeros');
const opradores = document.getElementById('operadores');
const buttonC = document.getElementById('btn-c');
let num1 = '',
    num2 = '',
    op = '';

function getNumber(event) {
    op === '' ? num1 += event.target.textContent : num2 += event.target.textContent;
    resultado.innerText = num1 + op + num2

}

function getOperator(event) {
    if (event.target.textContent === '=') {
        getResult();
    } else if (num2 === '') {
        //guarda el simbolo del operador
        op = event.target.textContent;
        //resultado.innerText = op;
        resultado.innerText = num1 + op + num2;
    } else {
        num1 = getResult();
        op = event.target.textContent;
        num2 = '';
        resultado.innerText = num1 + op + num2;
    }
}

function getResult() {
    resultado.innerText = eval(num1 + op + num2);
    return resultado.innerText;
}

function clearScreen() {
    console
    resultado.innerText = '';
    op = '';
    num1 = '';
    num2 = '';
}

numeros.addEventListener('click', getNumber);
operadores.addEventListener('click', getOperator);
buttonC.addEventListener('click', clearScreen);