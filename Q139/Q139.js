"use strict";
// Question 139: List three reserved words in JavaScript and create a valid use case for each.
// Reserved word: let - used to declare a block-scoped local variable
let x = 10;
// Reserved word: if - used to execute a block of code if a specified condition is true
if (x > 0) {
    console.log("Count is greater than 0.");
}
// Reserved word: return - used to exit a function and return a value from that function
function addition(num1, num2) {
    return num1 + num2;
}
console.log(addition(2, 2));
