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
        const addPrice = addition[0];
        const addCalories = addition[1];
        this.addPrice = addPrice;
        this.addCalories = addCalories;
    }

    calculatePrice() {
        const price = this.hamburgerPrice + this.addPrice;
        return price; 
    }

    calculateCalories() {
        const calories = this.hamburgerCalories + this.addCalories;
        return calories;
    }
}

const hamburger = new Hamburger (Hamburger.SIZE_SMALL);

console.log(hamburger);
console.log(hamburger.add(Hamburger.TOPING_MAYO));
console.log('Calories: ' + hamburger.calculateCalories());
console.log('Price: ' + hamburger.calculatePrice());
console.log(hamburger.add(Hamburger.ADDITION_SPICE));
console.log('Price with spice: ' + hamburger.calculatePrice()) 