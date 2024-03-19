// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

let computerProgrammerSkills = {
    codingLanguages : ["Javascript" , "Python" , "C++"],
    tools : ["Docker" , "Git" , "Webpack"],
    softwareFrameworks : ["Angular" , "React" , "Vue"]
};
// Getting specific skills from the list
let { codingLanguages, softwareFrameworks, tools } = computerProgrammerSkills;

// Showing a skill from each category
console.log(`Language: ${codingLanguages[0]}, Framework: ${softwareFrameworks[0]}, Tool: ${tools[0]}`);
console.log(`Language: ${codingLanguages[1]}, Framework: ${softwareFrameworks[1]}, Tool: ${tools[1]}`);
console.log(`Language: ${codingLanguages[2]}, Framework: ${softwareFrameworks[2]}, Tool: ${tools[2]}`);