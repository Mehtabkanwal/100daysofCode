// Question 63: Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including properties unique to each shape.

// Define a type alias for the Circle
type Circle = {
    shape: 'circle';
    radius: number;
  };
  
  // Define a type alias for the Rectangle
  type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
  };
  
  // Create instances of Circle and Rectangle
  const myCircle: Circle = {
    shape: 'circle',
    radius: 5,
    };
  
  const myRectangle: Rectangle = {
    shape: 'rectangle',
    width: 8,
    height: 6,
    };
  
  // Example usage
  console.log(myCircle);
  console.log(myRectangle);
