// Question 58: Average Score Calculator: Write a simple program that can take lots of scores and find their average.

 function scoreAverage (...scores:number[]) {
    let accumulation = scores.reduce((sum ,score)=>sum + score , 0)
    return accumulation / scores.length
 };

 console.log(scoreAverage(45,55,67,34,46));