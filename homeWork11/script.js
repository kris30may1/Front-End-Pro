'use strict'

function Student(name,...marks) {
    this.name = name;
    this.marks = marks;
    +marks;
}

Student.prototype.avgMark = function() {
    let sum = this.marks.reduce((a, b) => a + b, 0);
    let avg = sum/this.marks.length;
    return avg;
}

Student.prototype.maxMark = function() {
    return Math.max.apply(null,this.marks);
}

Student.prototype.minMark = function() {
    return Math.min.apply(null, this.marks);
}

function avgMark(){
    let sum = student.marks.reduce((a, b) => a + b, 0);
    let avg = sum/student.marks.length;
    return avg;
}

const students = [new Student('John',10,5,6,9,8,7,8),
                  new Student('Maya',9,8,10,10,9,10)]

console.log(students);

console.log(students[0].maxMark());
console.log(students[0].minMark());
console.log(students[0].avgMark());

console.log(avgMark());



