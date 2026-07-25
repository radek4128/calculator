let firstNum = '';
let secondNum = '';
let operator = null;
let is_infinity = false;
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
    if (a === 0 || b === 0) {
        is_infinity = true;
        return "Infinity ;)";
    }
    return a / b;
}


function operate(a, b, op, new_operator=null) {
    if (operator === "+") {
        result = add(a, b);
    } else if (operator === "-") {
        result = subtract(a, b);
    } else if (operator === "*") {
        result = multiply(a, b);
    } else if (operator === "/") {
        result = divide(a, b);
    }

    if (is_infinity) {
        display.innerText = result;
        return;
    }

    if (!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(4));
    }
    firstNum = result;
    secondNum = '';
    operator = new_operator;
    display.innerText = result;
}


const digits = document.querySelectorAll('.num');

digits.forEach((button) => button.addEventListener('click', 
    (e) => processDigits(e.target.innerText)));

function processDigits(n) {
    if (is_infinity) return;

    if (operator === null) {
        firstNum += n;
        display.innerText = firstNum;
    } else {
        secondNum += n;
        display.innerText = secondNum;
    }
}

const operators = document.querySelectorAll('.op');

operators.forEach((button) => button.addEventListener('click',
    (e) => processOperators(e.target.innerText)));

function processOperators(op) {
    if (is_infinity) return;

    if ((operator != null) && firstNum && secondNum) {
        if (op === '=') {
            operate(+firstNum, +secondNum, operator);
        } else {
            operate(+firstNum, +secondNum, operator, new_operator = op);
        }
    } else if (op != '=') {
        operator = op;
    }
}


const ceBtn = document.querySelector('.ac');
ceBtn.addEventListener('click', ac);

function ac() {
    firstNum = '';
    secondNum = '';
    operator = null;
    display.textContent = '';
    is_infinity = false;
}
