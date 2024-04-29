// alert(null || 2 || undefined) //output 2

// alert(alert(1) || 2 || alert(3)) // output 1 2

// alert(1 && null && 2) // output null

// alert( alert(1) && alert(2) ); //undefined

// alert( null || 2 && 3 || 4 ); //3

// Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.
// if (!(age >= 14 && age <= 90))
// if (age < 14 || age > 90)



// Which of these alerts are going to execute?

// What will the results of the expressions be inside if(...)?

// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
//the output will be the "first" and "third".

// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”

let userName = prompt('Enter your Name? ');
if (userName === "Admin") {
    let passWord = prompt("Enter Password ?");
    if(passWord === "TheMaster") {
        console.log("Welcome!")
    }
    else if (passWord === '' || passWord === null) {
        console.log('Cancelled')
    }
    else {
        console.log("I don't know you")
    } 
    
}
else if (userName === '' || userName === null) {
    console.log("Cancelled")
}
else {
    console.log("I don't know you")
}