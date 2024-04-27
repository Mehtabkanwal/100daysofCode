// What will be the result for these expressions?

5 > 4  //true
"apple" > "pineapple" //false
"2" > "12"  //true
undefined == null  //true
undefined === null  //false
null == "\n0\n" //false
null === +"\n0\n" //false

//if else

let value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

//ternary operator
// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }
let result = (a + b < 4) ? 'Below' : 'Over';


// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }
let message = (login == 'Employee') ? 'Hello' : 
  (login == 'Director') ? 'Greetings' : 
  (login == '') ? 'No login' : 
  '';