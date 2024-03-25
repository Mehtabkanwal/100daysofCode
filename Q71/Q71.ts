// Question 71: Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign a const-declared variable and catch the error.

let myName:string = "Kanwal";
//reassignment of let
myName = "Bilal";
console.log (myName); //no error


//example1
const pi = 3.14; // Declare a constant 'pi' with the value 3.14
// pi = 3.14159; // Attempt to reassign 'pi' (will result in an error)
// Error: Assignment to constant variable

//example2
// Trying to reassign a `const`-declared variable
const name1 = "kanwal";
try {
    // name1 = "Bilal"; // This line will cause an error
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.
