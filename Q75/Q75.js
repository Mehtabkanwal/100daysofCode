"use strict";
// Question 75: Compound Assignment Operators: Use compound assignment operators to simplify arithmetic operations. Start with x = 4 and perform a series of operations (addition, subtraction, multiplication, division) on x using compound operators.
function compoundAssignmentOperators() {
    let x = 4;
    console.log("Initial value of x : ", x);
    x += 3;
    console.log("After Addition,the value of x :", x);
    x -= 2;
    console.log("After Subtraction,the value of x :", x);
    x *= 5;
    console.log("After Multiplication,the value of x :", x);
    x /= 3;
    console.log("After Division,the value of x :", x);
}
;
compoundAssignmentOperators();
