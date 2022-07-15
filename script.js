const display = document.querySelector('.display');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');

operands.forEach((operand) => {
       operand.addEventListener('click', () => {
            display.textContent += operand.innerHTML;
       });
});

const allClear = document.querySelector('#ac');
allClear.addEventListener('click', () => {
    display.innerHTML = '';
});

