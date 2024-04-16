// Question 137: Implement a try-catch block to handle potential errors in a block of code.
try {
    // Block of code where potential errors may occur
    var result = "someFunctionThatMightThrowAnError";
    console.log("Result:", result);
}
catch (error) {
    // Catch block to handle the error
    console.error("An error occurred:", error);
    // You can choose to handle the error gracefully or rethrow it
    // throw error;
}
