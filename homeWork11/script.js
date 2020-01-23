'use strict'

function Student(name,...marks) {
    this.name = name;
    this.marks = marks;
    +marks;
}

Student.prototype.avgMark = function() {
    let sum = this.marks.reduce((a, b) => a + b);
    let avg = sum/this.marks.length;
    return avg;
}

Student.prototype.maxMark = function() {
    return Math.max.apply(null,this.marks);
}

Student.prototype.minMark = function() {
    return Math.min.apply(null, this.marks);
}

function groupAvgMark() {
    let avgArr = [];
    for (let i = 0; i < students.length; i++) {
        avgArr[i] = students[i].avgMark();
    }
    let sum = avgArr.reduce((a, b) => a + b);
    let avg = sum/avgArr.length;
    return avg;
}

const students = [new Student('John',10,5,6,9,8,7,8),
                  new Student('Maya',9,8,10,10,9,10),
                  new Student('Anna',8,10,9,5,6,8)]

console.log(students);

console.log(students[0].maxMark());
console.log(students[0].minMark());
console.log(students[0].avgMark());

console.log(groupAvgMark());



