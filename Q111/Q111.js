"use strict";
// Question 111: Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function usersAge(age) {
    if (age <= 13) {
        return "You Are A child";
    }
    else if (age > 13 && age <= 19) {
        return "You Are A Teenager";
    }
    else if (age >= 20) {
        return "You Are An Adult";
    }
}
console.log(usersAge(10));
console.log(usersAge(17));
console.log(usersAge(40));
