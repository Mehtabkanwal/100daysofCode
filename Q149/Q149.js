"use strict";
// Question 149: Explain the concept of the event loop in JavaScript with an example.
//The event loop is a fundamental concept in JavaScript, enabling asynchronous operations. It monitors the call stack and the callback queue. If the call stack is empty, it moves the first event from the queue to the stack, ensuring non-blocking execution.
console.log("Start Script...");
setTimeout(() => {
    console.log("Callback executed");
}, 0);
console.log("Done!");
