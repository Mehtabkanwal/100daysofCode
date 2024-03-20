"use strict";
// Question 57: Find the Average Grade: Given a list of grades, calculate the average grade.
let studentGrades = [85, 92, 78, 90, 88];
//average grade
let sum = studentGrades.reduce((total, grade) => total + grade, 0);
let average = sum / studentGrades.length;
console.log(`The average grade is: ${average}`);
