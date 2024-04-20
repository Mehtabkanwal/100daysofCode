// Question 145: Create a function that accepts a callback and invokes it with some arguments.

function invokeCallback(
    callback: (arg1: number, arg2: number) => void,
    arg1: number,
    arg2: number
  ): void {
    callback(arg1, arg2);
  }
  
  // Example callback function that adds two numbers
  const add = (a: number, b: number) => {
    console.log(a * b); 
  };
  
  invokeCallback(add, 5, 5); 