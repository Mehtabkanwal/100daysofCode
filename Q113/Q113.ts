// Question 113: Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.

let countriesNames = new Map<string,string>();
countriesNames.set("Pakistan" , "Islamabad");
countriesNames.set("Bangladesh" , "Dhaka");
countriesNames.set("SaudiArabia" , "Riyadh");


console.log(countriesNames);

function isExists (countriesNames:Map<string,string>) :void{
     if (countriesNames.has("Canada")) {
        console.log(`The Capital of Canada is ${countriesNames.get("Canada")}`)
     }
     else {
        console.log("Canada is not Present in the Map")
     }
}
isExists(countriesNames);
