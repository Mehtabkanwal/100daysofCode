// Question 98: Create a JavaScript snippet that calculates and logs how many days are left until New Year.

// // Get the current date
const currentDate = new Date();

// Set the target date for New Year (January 1 of the next year)
const newYearDate = new Date(currentDate.getFullYear() + 1, 0, 1);

// Calculate the difference in milliseconds between the two dates
const timeDifferenceMs =newYearDate.getTime() - currentDate.getTime();

// Convert the milliseconds to days
const daysRemaining = Math.ceil(timeDifferenceMs / (24 * 60 * 60 * 1000));

// Log the result
console.log(`Days remaining until New Year: ${daysRemaining}`);

