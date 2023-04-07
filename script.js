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
        return subtract(firstNumber,secondNumber);
    }else if ( operator === '*'){
        return multiply(firstNumber,secondNumber);
    }else if (operator === '/'){
        return divide(firstNumber,secondNumber);
    }
}

const btnNumber = document.querySelectorAll('.btn-number');
btnNumber.forEach(function(btn){
    btn.addEventListener('click',function(){
        display.innerText += btn.innerText
        storeDisplay = display.innerText;
    })
})

const btnOperator = document.querySelectorAll('.btn-operator');
btnOperator.forEach(function(btn){
    btn.addEventListener('click',function(){
        display.innerText += btn.innerText;
    })
})

const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click',function(){
    display.innerText += equalBtn.innerText

    if(operator === '+'){
        return add();
    }
    

})







const display = document.querySelector('.display');

let storeDisplay = '';
        











