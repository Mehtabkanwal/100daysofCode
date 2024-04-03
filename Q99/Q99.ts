// Question 99: Generate a date object representing your next birthday and log it to the console.

// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month: number, day: number): Date {
    const currentDate = new Date();
    let nextBirthdayYear = currentDate.getFullYear();
    const myBirthday = new Date(nextBirthdayYear, month - 1, day); // Months are 0-indexed
    if (myBirthday < currentDate) {
        // If the birthday this year has already passed, use next year's date
        myBirthday.setFullYear(nextBirthdayYear + 1);
    }
    return myBirthday;
}
const nextBirthday = getNextBirthday(7,30); 
console.log("My Next birthday will be on:", nextBirthday.toLocaleDateString());