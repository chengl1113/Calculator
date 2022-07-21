const display = document.querySelector('.display');
const operands = document.querySelectorAll('.operand');
const operators = document.querySelectorAll('.operator');
const equalsBtn = document.querySelector('#equals');

operands.forEach((operand) => {
       operand.addEventListener('click', () => {
            if(hasOperator){
                display.textContent = '';
                hasOperator = false;
            }
            display.textContent += operand.innerHTML;
       });
});

const allClear = document.querySelector('#ac');
allClear.addEventListener('click', () => {
    display.innerHTML = '';
    prevNum = ''
    currOperation = '';
    curNum = '';
});

let currOperation = '';
let prevNum ='';
let curNum = '';
let hasOperator = false;
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        prevNum = display.innerHTML;
        currOperation = operator.innerHTML;
        hasOperator = true;
        console.log(currOperation);
        console.log(prevNum);
    })
});

 equalsBtn.addEventListener('click', () => {
    curNum = display.innerHTML;
    result = calcuate(prevNum, curNum, currOperation);
    display.innerHTML = result;
    prevNum = result;
 });

function calcuate(prevNum, curNum, operator){
    prevNum = parseInt(prevNum);
    curNum = parseInt(curNum);
    if(operator == '+'){
        return prevNum + curNum;
    }
    if(operator == '-'){
        return prevNum - curNum;
    }
    if(operator == '*'){
        return prevNum * curNum;
    }
    if(operator == '/'){
        return prevNum / curNum;
    }
    if(operator == '%'){
        return 'IDK HOW THIS WORKS';
    }
    if(operator == '+/-'){
        return curNum * -1;
    }
}
