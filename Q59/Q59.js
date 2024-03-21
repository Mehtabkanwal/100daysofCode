"use strict";
// Question 59: Add a Special Number: Make a program that creates custom adders. These adders can add a specific number to any other number you give them later.
function createAdder(specialNumber) {
    return function (number) {
        return specialNumber + number;
    };
}
// Creating a custom adder with a special number of 5
let adderWith5 = createAdder(5);
// Using the custom adder to add 5 to different numbers
console.log(adderWith5(10)); // Output: 15
console.log(adderWith5(20)); // Output: 25
console.log(adderWith5(-3)); // Output: 2
