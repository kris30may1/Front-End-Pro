'use strict'

function Student(name, ...marks){
    this.name = name;
    this.marks = +marks;
}

Student.prototype.avgMark = function(marks){
    let sum;
    for(let i = 0; i < marks.lenght; i++){
        sum += marks[i];
    }
    let avg = sum/marks.lenght;
    return avg;
};

Student.prototype.maxMark = function(marks){
    const hMark = Math.max.apply(null, marks);
    alert(`The highest mark: ${hMark}`);
}

const student1 = new Student('John');
const student2 = new Student('Maya',9,8,10,10,9,10);

console.log(student1);
console.log(student2);

console.log(student1.avgMark(10,8,6,9,3,5));



