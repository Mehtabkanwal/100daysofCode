// Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

import Car from "./modules";

let myCar:Car = {
    name:"Toyota",
    model:"Corolla VX",
    make:2020,
    color:"White",
}
console.log(myCar.model);