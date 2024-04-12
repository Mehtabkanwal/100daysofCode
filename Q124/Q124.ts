// Question 124: Create a function inside an object that returns the object's own name property using the this keyword.

let myData = {
    name:"kanwal bilal",
    age:25,
    getName:function(){
        return this.name;
    }
}
console.log(myData.getName());
