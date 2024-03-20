// Question 56: Keep Only Strings: Given a mix of different types of items, make a new list that has only the words.

let mixedValues = ["coding" , true , "Beautiful" , 8 , "Typescript" , false , "Strawberry"]

//filter only string values

let stringValues = mixedValues.filter(item => typeof item === "string");

console.log (stringValues);