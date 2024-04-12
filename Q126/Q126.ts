// Question 126: Explain how the this keyword changes its value when used inside a nested function within a method.

const myObject = {
    property1: 'value1',
    method: function() {
      console.log(this.property1); // `this` refers to myObject
  
      const innerFunction =() => {
        console.log(this.property1); // `this` may not refer to myObject
      }
  
      innerFunction();
    }
  };
  
  myObject.method(); // Output: value1 followed by undefined or an error depending on the mode
  