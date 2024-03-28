// Question 80: Updating Object Properties: Add a property named color to the existing car object, and then update the year property to 2021. Show how to perform these operations.

// Starting with our car object
let myCar = {
    make: "Toyota",
    model: "Corolla(wagon)",
    year: 2020
};

// Adding a new property 'color' and updating 'year'
myCar.color = "blue"; // Adds a new property 'color'
myCar.year = 2021; // Updates the 'year' property

// Showing the updated car object
console.log(myCar); // Outputs the car object with the new color and updated year
// Now our car is blue and its model year is updated to 2021.