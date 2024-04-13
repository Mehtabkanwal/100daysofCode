"use strict";
// Question 127: Convert a traditional function expression to an arrow function.
// Traditional function expression
function traditionalFunction(a, b) {
    return a + b;
}
;
// Converted to arrow function
let arrowFunction = (a, b) => a + b;
console.log(traditionalFunction(9, 3));
console.log(arrowFunction(9, 3));
