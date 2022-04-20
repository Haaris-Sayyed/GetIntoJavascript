// Arithmetic Operators
console.log(10 + 20);
console.log(15 - 10);
console.log(4 * 5);
console.log(80 / 5);
console.log(11 % 2);
console.log(3 ** 2);

// Comparison Operators
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(5 <= 5);
console.log(10 != 5);
console.log(5 == 5);
console.log(5 === "5");

// Logical Operators
console.log(10 > 5 && 20 < 50);
console.log(10 > 5 || 20 < 18);
console.log(!(10 > 5));

// Pre-increment & pre-decrement
let x = 10;
console.log(++x);
console.log(--x);

// Post-increment & post-decrement

console.log(x++);
console.log(x--);

// Ternary Operator
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`);

// ============= Window Methods =================

// Window alert() method
//alert() method displays an alert box with a specified message and an OK button.
//alert(message)

alert("Hello World!");

// Window prompt() method
//The window prompt methods display a prompt box with an input on your browser
//to take input values and the input data can be stored in a variable.
//prompt('required text', 'optional text')

let number = prompt("Enter number", "number goes here");
console.log(number);

// Window confirm() method
// The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
// A confirm box is often used to ask permission from a user to execute something. Window confirm()
// takes a string as an argument.
// Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

const agree = confirm("Are you sure?");
console.log(agree); // result will be true or false based on what you click on the dialog box

// ==============================================

// Date Object

const now = new Date();
const year = now.getFullYear(); // return year
const month = now.getMonth() + 1; // return month(0 - 11)
const date = now.getDate(); // return date (1 - 31)
const hours = now.getHours(); // return number (0 - 23)
const minutes = now.getMinutes(); // return number (0 -59)

console.log(`${date}/${month}/${year} ${hours}:${minutes}`);
