"use strict";
// Question 146: Show an example of a callback function used to filter an array of numbers.
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filteredNumberArray = numbersArray.filter((number) => number < 7);
console.log(filteredNumberArray);
