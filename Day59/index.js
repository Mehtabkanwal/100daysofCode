// What is the last value alerted by this code? Why?

// let i = 3;

// while (i) {
//   alert( i-- );
// }
//output will be 3 , 2 , 1

// The prefix form ++i:
// let i = 0;
// while (++i < 5) alert( i ); // output will be 1 , 2 , 3 ,4

// // The postfix form i++
// let j = 0;
// while (j++ < 5) alert( j ); // output will be 1 , 2, 3, 4, 5

// The postfix form:

// for (let i = 0; i < 5; i++) alert( i ); //output will b 0 , 1 ,2 , 3, 4
// // The prefix form:

// for (let i = 0; i < 5; ++i) alert( i ); //output will b 0 , 1 ,2 , 3, 4

// Use the for loop to output even numbers from 2 to 10.
// for (let i = 2 ; i <= 10 ; i++) {
//     if (i % 2 === 0) {
//         alert(i)
//     }
// }
// Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }
// let i =0;
// while (i < 3) {
//     alert(`number ${i}! `);
//     i++
// }


// Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

// The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.

// Here we can assume that the visitor only inputs numbers. There’s no need to implement a special handling for a non-numeric input in this task.
// let userInput;
// do {
//     userInput = prompt('Enter a number greater than 100: ')
// }
// while(userInput <= 100 && userInput)

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.
// let n = 10;
// nextPrime:
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if(i % j == 0) {
//             continue nextPrime
//         }
//     }
//     alert(i)
// }

// Write the code using if..else which would correspond to the following switch:

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// if (browser == 'Edge') {
//     alert( "You've got the Edge!" );
// }
// else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
// }
// else {
//     alert( 'We hope that this page looks ok!' );
// }

// Rewrite the code below using a single switch statement:

// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

//solution
let a = +prompt('a?' , '');
switch (a) {
    case 0:
        alert( 0 );
        break;
    case 1:
        alert( 1 );
        break;
    case 2 :
    case 3:
        alert( '2,3');
        break;
}