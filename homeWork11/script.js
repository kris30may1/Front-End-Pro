'use strict'

function Student(name, ...marks){
    this.name = name;
    this.marks = +marks;
}

Student.prototype.avgMark = function(marks){
    let sum;
    for(let i = 0; i < marks.length; i++){
        sum += marks[i];
    }
    let avg = sum/marks.length;
    return avg;
};

Student.prototype.maxMark = function(marks){
    console.log(Math.max.apply(null, marks));
}

const students = [new Student('John',10,5,6,9,8,7,8),
                  new Student('Maya',9,8,10,10,9,10)]

console.log(students);

console.log(students[1].avgMark());



