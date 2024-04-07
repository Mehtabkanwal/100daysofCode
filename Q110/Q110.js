"use strict";
// Question 110: Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function studentsGrade(Marks) {
    if (Marks >= 80) {
        return "A";
    }
    else if (Marks >= 70) {
        return "B";
    }
    else if (Marks >= 60) {
        return "C";
    }
    else if (Marks >= 50) {
        return "D";
    }
    else if (Marks >= 40) {
        return "F";
    }
}
console.log(studentsGrade(75));
