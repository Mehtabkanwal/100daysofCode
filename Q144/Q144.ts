// Question 144: Explain the use of the Promise.all() method with an example.

// Promise.all() is a powerful method that allows you to handle multiple Promises simultaneously.
// It takes an array of Promises as input and returns a new Promise.
// The new Promise resolves when all the input Promises have resolved successfully, or rejects if any of them fail.
// Example using Promise.all to wait for multiple promises to resolve
const promise1 = Promise.resolve(9);
const promise2 = "kanwal";
const promise3 = new Promise<string>((resolve) => {
  setTimeout(resolve, 100, "bee");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); 
});
// This demonstrates how Promise.all waits for all promises to resolve and then logs the array of their results.