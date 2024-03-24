"use strict";
// Question 69: Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder. Use an object to return both values.
function quotientRemainder(dividend, divisor) {
    let quotient = Math.floor(dividend / divisor);
    let remainder = dividend % divisor;
    return { quotient, remainder };
}
console.log(quotientRemainder(10, 4));
console.log(quotientRemainder(20, 4));
console.log(quotientRemainder(30, 4));
