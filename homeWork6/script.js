'use strict'

let oper;
let qual;
let item;
let values = [];
let result;

do {
    oper = prompt('Enter the math operator (+ , - , / , *):');
} while(oper !== '+' && 
        oper !== '-' && 
        oper !== '*' && 
        oper !== '/');

do{
    qual = prompt('Enter the quality of values you wish: ');
} while(isNaN(qual) || qual === '' || qual <= 0 || qual >= 5);

for(let i = 0; i < qual ; i++){
    do {
        item = prompt(`Enter number ${i + 1}:`);
    } while(isNaN(item) || item === '');
    values[i] = item;
    }

values.map(Number);

console.log(values);

switch(oper){
    case '+':
        result = values.reduce((a , b) => +a + +b);
    break;
    case '-':
        result = values.reduce((a , b) => a - b);
    break;
    case '*':
        result = values.reduce((a , b) => a * b);
    break;
    case '/':
        result = values.reduce((a , b) => a / b);
    break;
}

alert(`Result: ${result}`);
