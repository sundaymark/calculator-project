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
     display.innerText += btn.innerText;
     storeDisplay = display.innerText;
     if (operator !== "") {
       secondNumber += btn.innerText;
     } else {
       firstNumber += btn.innerText;
     }
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
   let answer = operate();
    firstNumber = answer;
   secondNumber = '';
    operator = '';
   display.innerText = firstNumber;
  if(firstNumber =='' && operator == "/" && secondNumber == '0'){
    display.innerText ='no division'
  }

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
 
        











