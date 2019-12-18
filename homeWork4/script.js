'use strict'

let oper;
let firstVal;
let secondVal;
let result;
let valid;

do {
    oper = prompt('Enter the math operator (+ , - , / , *):');
    if(oper == '+' || oper == '-' || oper == '*' || oper == '/'){
    valid = true;
    }
} while(!valid);

do{
    firstVal = +prompt('Enter first value: ');
} while (isNaN(firstVal));

do{
    secondVal = +prompt('Enter second value: ');
} while (isNaN(secondVal));

switch(oper){
    case '+':
        result = firstVal + secondVal;
    break;
    case '-':
        result = firstVal - secondVal;
    break;
    case '*':
        result = firstVal * secondVal;
    break;
    case '/':
        result = firstVal / secondVal;
    break;
}

alert(`Result: ${firstVal} ${oper} ${secondVal} = ${result}`);