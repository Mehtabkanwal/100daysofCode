// Question 104: Create a function that generates a random hexadecimal color code.


function getRandomHexColor(): string {
    let result = '#';
    for (let i = 0; i < 6; i++) {
        const value = Math.floor(16 * Math.random());
        result += value.toString(16);
    }
    return result;
}

// Example usage:
const randomColor = getRandomHexColor();
console.log(`Random color code: ${randomColor}`);




// // This function generates a random hexadecimal color code
// function getRandomHexColor(): string {
//     const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
//     return color; // Returns the random color code
// }

// console.log(getRandomHexColor()); // Outputs a random hex color code like #ff3e12
// // We generate a random number, convert it to hexadecimal, and ensure it's 6 characters long.
