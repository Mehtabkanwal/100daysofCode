// Question 150: Describe how asynchronous callbacks differ from synchronous code execution.
// Synchronous Code Execution:
// In synchronous code, each operation happens one after the other, in a predictable order.
// Imagine following a recipe step by step. You don’t move to the next step until the current one is complete.
// Synchronous code blocks (waits) until a task finishes before moving on to the next task.
// // Synchronous example
console.log("Start");
// Blocking operation (e.g., reading a file)
console.log("Middle");
// Another blocking operation
console.log("End");

// Asynchronous Callbacks:
// In asynchronous code, tasks can happen concurrently without waiting for each other.
// Imagine ordering food at a restaurant. You don’t wait at the counter; they call you when your food is ready.
// Asynchronous code doesn’t block execution; it continues with other tasks while waiting for a response.
// // Asynchronous example
console.log("Start");
// Non-blocking operation (e.g., fetching data from an API)
setTimeout(() => {
    console.log("API response received");
}, 1000); // Wait for 1 second
console.log("End");

// Demonstrates how the rest of the code continues to execute without waiting for the asynchronous operation.
