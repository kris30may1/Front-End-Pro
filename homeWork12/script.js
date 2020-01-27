'use strict'

class Hamburger {
    
    static SIZE_SMALL = {price: 50,
                         calories = 20};
    static SIZE_MIDDLE = {price: 75,
                          calories: 30};
    static SIZE_LARGE = {price: 100,
                         calories: 40};

    static ADDITION_CHEESE = {price: 10,
                              calories: 20};
    static ADDITION_SALAD = {price: 20,
                            calories: 5};
    static ADDITION_POTATO = {price: 15,
                              calories: 5};
    static ADDITION_SPICE = {price: 15,
                             calories: 0};
    static TOPING_MAYO = {price: 20,
                          calories: 5};
    
    constructor(hamburgerPrice, hamburgerCalories) {
        this.hamburgerPrice = Hamburger.SIZE_SMALL.price || Hamburger.SIZE_MIDDLE.price || Hamburger.SIZE_LARGE.price;
        this.hamburgerCalories = Hamburger.SIZE_SMALL.calories || Hamburger.SIZE_MIDDLE.calories || Hamburger.SIZE_LARGE.calories;
    }

    add(addition) {
        const addPrice = addition.price;
        const addCalories = addition.calories;
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