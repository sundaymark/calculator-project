 const add = (a, b) =>  a  +  b;

const subtract = (a, b) => a  -  b;

const multiply = (a, b) =>  a  *  b;

const divide = (a, b) =>  a  /  b;

const firstNumber = '';
const operator = '';
const secondNumber = '';

const operate = (operator, firstNumber,secondNumber)=>{
    if(operator === '+'){
        return add(firstNumber,secondNumber);
    }else if(operator === '-'){
        return subtract(firstNumber,secondNumber)
    }else if ( operator === '*'){
        return multiply(firstNumber,secondNumber)
    }else if (operator === '/'){
        return divide(firstNumber,secondNumber);
    }
}

console.log(operate('+',5,5))








