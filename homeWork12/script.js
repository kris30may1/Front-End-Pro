'use strict'

class Hamburger {
    
    constructor(size) {
        this.size = size;
        this.additions = [];
    }

    static SIZE_SMALL = { price: 50, calories: 20 };
    static SIZE_MIDDLE = { price: 75, calories: 30 };
    static SIZE_LARGE = { price: 100, calories: 40 };
    static ADDITION_CHEESE = { price: 10, calories: 20 };
    static ADDITION_SALAD = { price: 20, calories: 5 };
    static ADDITION_POTATO = { price: 15, calories: 5 };
    static ADDITION_SPICE = { price: 15, calories: 0 };
    static TOPING_MAYO = { price: 20, calories: 5 };
    
    calculatePrice() {
        return this.additions.reduce((sum, addition) => {
            return sum + addition.price;
        }, this.size.price);
    }

    calculateCalories() {
        return this.additions.reduce((sum, addition) => {
            return sum + addition.calories;
        }, this.size.calories);
    }

    add(addition) {
        this.additions.push(addition);
    }
}

const hamburger = new Hamburger (Hamburger.SIZE_SMALL);
hamburger.add(Hamburger.TOPING_MAYO); // добавка из майонеза 

console.log('Calories: ' + hamburger.calculateCalories()); // калорийность гамбургера с майонезом
console.log('Price: ' + hamburger.calculatePrice()); // цена гамбургера с майонезом
hamburger.add(Hamburger.ADDITION_SPICE); // добавим приправы
console.log('Price with spice: ' + hamburger.calculatePrice()); // цена гамбургера с майонезом и приправой
console.log('Calories with spice: ' + hamburger.calculateCalories()); // калорийность гамбургера с майонезом и приправой