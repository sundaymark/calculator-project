 const add = (a, b) => a + b;

 const subtract = (a, b) => a - b;

 const multiply = (a, b) => a * b;

 const divide = (a, b) => a / b;

 let firstNumber = "";
 let operator = "";
 let secondNumber = "";

 const operate = () => {
   let newfirstNumber = parseInt(firstNumber);
   let newSecondNumber = parseInt(secondNumber);
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
 btnNumber.forEach(function (btn) {
   btn.addEventListener("click", function () {
     display.innerText += btn.innerText;
     storeDisplay = display.innerText;
     if (operator !== "") {
       secondNumber += btn.innerText;
     } else {
       firstNumber += btn.innerText;
     }
     console.log(firstNumber, secondNumber);
   });
 });

 const btnOperator = document.querySelectorAll(".btn-operator");
 btnOperator.forEach(function (btn) {
   btn.addEventListener("click", function () {
     display.innerText += btn.innerText;
     operator = btn.innerText;
   });
 });

 const equalBtn = document.querySelector(".equal");
 equalBtn.addEventListener("click", function () {
   display.innerText = operate();
 });

 const display = document.querySelector(".display");

 let storeDisplay = "";
        











