 const add = (a, b) => a + b;

 const subtract = (a, b) => a - b;

 const multiply = (a, b) => a * b;

 const divide = (a, b) => a / b;

 let firstNumber = "";
 let operator = "";
 let secondNumber = "";

 const operate = () => {
   let newfirstNumber = Number(firstNumber);
   let newSecondNumber = Number(secondNumber);
   if (operator === "+") {
     return add(newfirstNumber, newSecondNumber);
   } else if (operator === "-") {
     return subtract(newfirstNumber, newSecondNumber);
   } else if (operator === "*") {
     return multiply(newfirstNumber, newSecondNumber);
   } else if (operator === "/") {
     return divide(newfirstNumber, newSecondNumber);
   }
 };

 const btnNumber = document.querySelectorAll(".btn-number");
 btnNumber.forEach((btn) => {
   btn.addEventListener("click", () =>{
    if(display.innerText === 'ERROR'){
      display.innerText = ''
    }
     if (operator !== "") {
      if(btn.innerText === '.' && secondNumber.includes('.')){
        return 
      }
       secondNumber += btn.innerText;
     } else {
      if(btn.innerText === '.' && firstNumber.includes('.')){
        return 
      }
       firstNumber += btn.innerText;
     }
      display.innerText += btn.innerText;
     storeDisplay = display.innerText;
   });
 });

 const btnOperator = document.querySelectorAll(".btn-operator");
 btnOperator.forEach( (btn)=> {
   btn.addEventListener("click",() =>{
     display.innerText += btn.innerText;
     operator = btn.innerText;

   });
  
 });

 const equalBtn = document.querySelector(".equal");
 equalBtn.addEventListener("click", ()=> {
  if(operator == "/" && secondNumber == '0'){
    return display.innerText ='ERROR'
  }
   let answer = operate();
    firstNumber = answer;
   secondNumber = '';
    operator = '';
   display.innerText = firstNumber;
 });

 const display = document.querySelector(".display");

 let storeDisplay = "";
 let input = '';


 let clearBtn = document.querySelector('.clear');
 clearBtn.addEventListener('click',function(){
  firstNumber = "";
  operator = "";
  secondNumber = "";
  display.innerText = '';
 })
 
        











