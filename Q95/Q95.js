"use strict";
// Question 95: Write a function that uses the .filter() method to return an array of numbers greater than 10.
function numberGreaterThanTen(numbers) {
    return numbers.filter(num => num > 10);
}
console.log(numberGreaterThanTen([15, 3, 6, 19, 34, 44, 8, 9, 99, 67, 56]));
