// Question 92: Write a function to remove the last element from an array and return the removed


// This function removes the last element from an array and returns it
function removeLastElementFromArray<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined; // Array is empty, nothing to remove
    }
    return arr.pop(); // Removes and returns the last element of the array
}

// Example: Removing the last fruit from the array
const fruits: string[] = ["Apple", "Banana", "Strawberry"];
console.log(removeLastElementFromArray(fruits));
console.log(fruits); 
