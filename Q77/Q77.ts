// Question 77: Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and say hello. If no name is given, it should greet an anonymous user.

function defaultParameters (userName: string = "Anonymous") {
    console.log(`Hello! ${userName}.`)
}

defaultParameters("Kanwal");
defaultParameters();