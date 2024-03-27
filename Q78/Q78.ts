// Question 78: Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating one of each that performs the same task, such as squaring a number.

function squareNumberDeclaration (num:number) {
        return num*num;
}
console.log(squareNumberDeclaration(4));

let squareNumberExpression =function (num:number) {
     return num*num;
}
console.log(squareNumberExpression(4));