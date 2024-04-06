// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.

function isIdentical (value1:string,value2:string):boolean {
    return value1.toLowerCase() == value2.toLowerCase();
}
console.log(isIdentical("mehtab" , "MEHTAB"));
console.log(isIdentical("BILAL" , "bilal"));