"use strict";
// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.
function findFirstVowel(str) {
    const vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            console.log('First vowel found at index:', i);
            break;
        }
    }
}
findFirstVowel('Typescript');
