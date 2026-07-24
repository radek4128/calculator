let firstNum = '';
let secondNum = '';
let operator = null;
const display = document.querySelector('.display');


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}


function operate(a, b, operator) {
    if (operator === "+") {
        result = add(a, b);
    } else if (operator === "-") {
        result = subtract(a, b);
    } else if (operator === "*") {
        result = multiply(a, b);
    } else if (operator === "/") {
        result = divide(a, b);
    }
    
    display.innerText = result;
}

const digits = document.querySelectorAll('.num');

digits.forEach((button) => button.addEventListener('click', 
    (e) => processDigits(e.target.innerText)));

function processDigits(n) {
    // console.log(n)
    if (operator === null) {
        firstNum += n;
        display.innerText = firstNum;
        console.log(n)
    } else {
        secondNum += n;
        display.innerText = secondNum;
    }
}


const operators = document.querySelectorAll('.op');

operators.forEach((button) => button.addEventListener('click',
    (e) => processOperators(e.target.innerText)));


function processOperators(op) {
    if (op === '=' && firstNum && secondNum) {
        operate(+firstNum, +secondNum, operator);
    } else {
        operator = op;
        console.log(operator);
    }
}