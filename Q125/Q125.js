"use strict";
// Question 125: Modify a method in an object to use the this keyword to access another property in the same object.
let squareArea = {
    length: 8,
    width: 8,
    calaculateArea: function () {
        return this.length * this.width;
    }
};
console.log(squareArea.calaculateArea());
