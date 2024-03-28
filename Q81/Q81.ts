// Question 81: Iterating Over Object Properties: Write a function that takes an object as an argument and logs all of its properties and values.


function logObjectProperties (object:object){
    for(let property in object) {
         console.log(`${property}: ${object[property]}`)
    }
}

logObjectProperties({name:"kanwal bilal" , hobby:"Coding" , contactNo:90078601 , city:"karachi"});
