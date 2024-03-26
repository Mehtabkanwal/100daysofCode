// Question 74: Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and b = 10, then swap their values so that a becomes 10 and b becomes 5.

function swapVariables () {

    let a:number = 5;
    let b:number = 10;
    console.log("Before Swap the value of a is :" , a , "and value of b is :" , b);
    let temporary = a;
    a= b;
    b = temporary;
    console.log("After Swap the value of a is :" , a , "and the value of b is :" , b);
}
swapVariables();