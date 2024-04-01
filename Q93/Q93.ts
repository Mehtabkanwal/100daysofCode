// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".

function replaceBananaWithMango(fruits: string[]): void {
    const index = fruits.indexOf("Banana"); // Finds the index of "Banana"
    if (index !== -1) fruits[index] = "Mango"; // Replaces "Banana" with "Mango" if found
}

// Example: Replacing "Banana" in the array
let fruitsArray:string[] = ["Apple" , "Banana" , "Strawberry"];
replaceBananaWithMango(fruitsArray);
console.log(fruitsArray); 