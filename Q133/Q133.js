"use strict";
// Question 133: Write a JavaScript object and convert it into a JSON string.
const myData = {
    name: "kanwal bilal",
    age: 25,
    city: "karachi",
    education: "B.COM"
};
const jsonString = JSON.stringify(myData);
console.log(jsonString);
