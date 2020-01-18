'use strict'

function createCalculator(num){
    return {
        set: value => (num = value),
        add: (value) => num + value,
        sub: (value) => num - value,
        divide: (value) => num / value,
        mult: (value) => num * value
    }
}

const calculator = createCalculator(10); 

console.log(calculator.add(45)); // возвращает 55 
console.log(calculator.sub(45)); // возвращает -35 
console.log(calculator.divide(5)); // возвращает 2 
console.log(calculator.mult(5)); // возвращает 50 
console.log(calculator.set(100)); // устанавливает базовое значение в 100 
console.log(calculator.mult(5)); // возвращает 500