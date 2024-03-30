// Question 86: Checking for Text Presence: Create a function that checks if the word "JavaScript" is present in a given string. It should return true if found, otherwise false.


function isPresent (text:string) {
    return text.includes("JavaScript");
}

console.log(isPresent("TypeScript is the SuperSet of JavaScript"));
