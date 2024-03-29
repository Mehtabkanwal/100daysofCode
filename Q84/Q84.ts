// Question 84: Replacing Text in a String: Write a function that takes a sentence and replaces all instances of the word "JavaScript" with "TypeScript".

function replaceInstances (value:string) {
    return value.replace(/JavaScript/g , "TypeScript")
}
console.log(replaceInstances("I love JavaScript and JavaScript is love"));