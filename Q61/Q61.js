"use strict";
// Question 61: Making Enums for Vehicles: Let's create categories for vehicles like cars, trucks, and motorcycles using enums, and show one example.
var vehicles;
(function (vehicles) {
    vehicles[vehicles["cars"] = 0] = "cars";
    vehicles[vehicles["trucks"] = 1] = "trucks";
    vehicles[vehicles["motorcycles"] = 2] = "motorcycles";
    vehicles[vehicles["buses"] = 3] = "buses";
    vehicles[vehicles["train"] = 4] = "train";
})(vehicles || (vehicles = {}));
;
console.log(vehicles.buses);
console.log(vehicles.trucks);
console.log(vehicles.motorcycles);
console.log(vehicles.cars);
console.log(vehicles.train);
