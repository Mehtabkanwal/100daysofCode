// Question 94: Use the .map() method to create a new array that contains the length of each word from an array of words.

let wordArray:string[]=["kanwal" , "Bilal" , "Ahmed" , "Safa"];

let lengthOfWords : number[]=wordArray.map(word => word.length);

console.log(lengthOfWords);
