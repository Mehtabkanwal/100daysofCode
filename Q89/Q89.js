"use strict";
// Question 89: Converting Strings to Numbers: Create a function that takes a string representing a number (like "123") and converts it into an actual number type.
//parseInt change string to numbers
function stringToNumber(val) {
    return parseInt(val);
}
console.log(stringToNumber("7879"));
//parseFloat changes decimal string to decimal numbers
function stringToDecimalNumber(val) {
    return parseFloat(val);
}
console.log(stringToDecimalNumber("123.56"));
