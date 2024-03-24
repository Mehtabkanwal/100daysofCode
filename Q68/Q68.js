"use strict";
// Question 68: Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product. Round the result to two decimal places.
function multiplyDecimals(value1, value2) {
    return Math.round((value1 * value2) * 100) / 100;
}
console.log(multiplyDecimals(0.1, 0.2));
console.log(multiplyDecimals(2.1, 0.2));
console.log(multiplyDecimals(0.1, 6.2));
console.log(multiplyDecimals(4.1, 3.2));
