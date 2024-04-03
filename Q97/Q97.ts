// Question 97: Write a function that returns the current date in the format "DD-MM-YYYY"

function getDateFormat(): string {
    const rightnow = new Date();
    const day = String(rightnow.getDate()).padStart(2, '0'); 
    const month = String(rightnow.getMonth() + 1).padStart(2, '0'); 
    const year = rightnow.getFullYear();
    return `${day}-${month}-${year}`;
}

console.log(getDateFormat());