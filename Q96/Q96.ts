// Question 96: Demonstrate how to use the .reduce() method to calculate the sum of all numbers in an array.

function accumulateNumbers (numbers:number[]) {
    return numbers.reduce((accumulator:number, currentValue:number)=>accumulator + currentValue , 0)
}
console.log(accumulateNumbers([2,6,8,0,4,5,10,9,7]))