'use strict'

const userArr = prompt('Enter some numbers:')
.split(',')
.filter(item => !isNaN(item) && item.trim(''));
alert(userArr);

    function evenNumber(arrA){
        const evenArr = arrA.filter((elem) => elem % 2 === 0);
        alert(`Even numbers: ${evenArr}`);
    }

    function maxElemOfArr(arrB){
        const maxNum = Math.max.apply(null, arrB);
        alert(`Maximum number: ${maxNum}`);
    }

    function sum(arrC){
        const sumArr = arrC.reduce((a , b) => +a + +b, 0);
        alert(`The sum of numbers: ${sumArr}`);
    }

evenNumber(userArr);
maxElemOfArr(userArr);
sum(userArr);


