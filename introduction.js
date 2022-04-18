// 1.Write a single line comment which says, comments can make code readable

// Comments can make code readable.

// 2.Write a multiline comment which says, comments can make code readable, easy to reuse and informative

/**
 * Comments can make code readable,
 * easy to reuse and informative.
 */

// 3.Declare variables and assign string, boolean, undefined and null data types

let string = "Hello World!";
let string1 = "Hello World!"; // String data type
let string2 = `Hello World!`;

let isValid = true;
let hasValue = false; // boolean data type

let firstName;
console.log(firstName); // undefined, because it is not assigned to a value yet

let emptyValue = null; // Null in JavaScript means an empty value

/* 4.Create datatypes and use the JavaScript typeof operator to check different data types.
  Check the data type of each variable */

console.log(typeof "Hello World!"); // string
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof null); // object type
console.log(typeof undefined); // undefined

// 5.Declare four variables without assigning values

let variable1;
let variable2;
let variable3;
let variable4;

// 6.Declare four variables with assigned values

let value1 = 3.78;
let lastName = "Parker";
let isPrime = true;
const PI = 3.14;

// 7.Declare variables to store your first name, last name, marital status, country and age in multiple lines
let $firstName = "Peter";
let $lastName = "Parker";
let maritalStatus = "Single";
let country = "India";
let age = 20;

// 8.Declare variables to store your first name, last name, marital status, country and age in a single line

let _firstName = "Peter",
  _lastName = "Parker",
  _maritalStatus = "Single",
  _country = "India",
  _age = 20;

// 9.Declare two variables myAge and yourAge and assign them initial values and log to the browser console.

let myAge = 20,
  yourAge = 24;
console.log("I am", myAge, "years old.");
console.log("You are", yourAge, "years old.");
