'use strict'

class Hamburger {
    
    static SIZE_SMALL = [50, 20];
    static SIZE_MIDDLE = [75, 30];
    static SIZE_LARGE = [100, 40];

    static ADDITION_CHEESE = [10, 20];
    static ADDITION_SALAD = [20, 5];
    static ADDITION_POTATO = [15, 10];
    static ADDITION_SPICE = [15, 0];
    static TOPING_MAYO = [20, 5];
    
    constructor(hamburgerPrice, hamburgerCalories) {
        this.hamburgerPrice = Hamburger.SIZE_SMALL[0] || Hamburger.SIZE_MIDDLE[0] || Hamburger.SIZE_LARGE[0];
        this.hamburgerCalories = Hamburger.SIZE_SMALL[1] || Hamburger.SIZE_MIDDLE[1] || Hamburger.SIZE_LARGE[1];
    }

    add(addition) {
        this.addition = addition[0];
    }

    calculatePrice() {
        const sum = this.hamburgerPrice + this.addition; 
        return sum;
    }

    calculateCalories() {
        const caloriesSum = this.hamburgerCalories;
        return caloriesSum;
    }
}

const hamburger = new Hamburger (Hamburger.SIZE_SMALL);

console.log(hamburger);
console.log(hamburger.add(Hamburger.TOPING_MAYO));
console.log(hamburger.calculatePrice);

console.log(hamburger.hamburgerCalories);