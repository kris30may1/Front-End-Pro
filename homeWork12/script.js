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
        this.hamburgerPrice += this.addPrice;
        return this.hamburgerPrice; 
    }

    calculateCalories() {
        this.hamburgerCalories += this.addCalories;
        return this.hamburgerCalories;
    }
}

const hamburger = new Hamburger (Hamburger.SIZE_SMALL);

console.log(hamburger); // маленький гамбургер
console.log(hamburger.add(Hamburger.TOPING_MAYO)); // добавка из майонеза 
console.log('Calories: ' + hamburger.calculateCalories()); // калорийность гамбургера с майонезом
console.log('Price: ' + hamburger.calculatePrice()); // цена гамбургера с майонезом
console.log(hamburger.add(Hamburger.ADDITION_SPICE)); // добавим приправы
console.log('Price with spice: ' + hamburger.calculatePrice()); // цена гамбургера с майонезом и приправой
console.log('Calories with spice: ' + hamburger.calculateCalories()); // калорийность гамбургера с майонезом и приправой