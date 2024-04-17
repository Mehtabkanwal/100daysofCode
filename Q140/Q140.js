// Question 140: Explain the error that occurs when trying to use a reserved word as a variable name.
let;
return  = 5; // SyntaxError: Unexpected token 'return'
console.log("In this case, return is a reserved word used to specify the value to be returned from a function. Trying to use it as a variable name violates JavaScript syntax rules, resulting in a syntax error.");
