// Question 101: Generate a random integer between 1 and 10.

function generateRandomNumber ():number {
    return Math.ceil(Math.random() * 10) 
}
console.log(generateRandomNumber())