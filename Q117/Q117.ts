// Question 117: Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.

function evaluateExpression (grade:string) {
    switch(grade) {
        case "Excellent": 
            console.log("A");
            break;
        case "Very Good":
            console.log("B");
            break;
        case "Good":
            console.log("C");
            break;
        case "Fail":
            console.log("D");
            break;
        default:
            console.log("Invalid Grade")
    }
}
evaluateExpression("Good")