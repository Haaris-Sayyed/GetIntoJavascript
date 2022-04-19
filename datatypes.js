
// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge='30 Days Of JavaScript'

// Print the string on the browser console using console.log()
console.log(`challenge = ${challenge}`)  // challenge = 30 Days Of JavaScript

// Print the length of the string on the browser console using console.log()
console.log('length=',challenge.length) // length= 21

// Change all the string characters to capital letters using toUpperCase() method
console.log('toUpperCase=','30 Days Of JavaScript'.toUpperCase()) // toUpperCase= 30 DAYS OF JAVASCRIPT

// Change all the string characters to lowercase letters using toLowerCase() method
console.log('toLowerCase=','30 Days Of JavaScript'.toLowerCase()) // toLowerCase= 30 days of javascript

// Cut (slice) out the first word of the string using substring() method
let subStr=challenge.substring(0,2)
console.log('Substring=',subStr)      // Substring= 30

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let phrase=challenge.substring(3)  // phrase= Days Of JavaScript
console.log('phrase=',phrase) 

// Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script')) // true

// Split the string into an array using split() method
console.log(challenge.split())  // [ '30 Days Of JavaScript' ]

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(challenge.split(' ')) // [ '30', 'Days', 'Of', 'JavaScript' ]

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let string='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(string.split(', '))  // ['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log('30 Days Of JavaScript'.replace('JavaScript','Python')) // 30 Days Of Python

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(challenge.charAt(15))  // S

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(challenge.charCodeAt(11)) // 74

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(challenge.indexOf('a')) // 4

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(challenge.lastIndexOf('a')) // 14

let sentence='You cannot end a sentence with because because because is a conjunction'

// Use indexOf to find the position of the first occurrence of the word because in the sentence:
console.log(sentence.indexOf('because')) // 31

// Use lastIndexOf to find the position of the last occurrence of the word because in the sentence:
console.log(sentence.lastIndexOf('because'))  // 47

// Use search to find the position of the first occurrence of the word because in the sentence:
console.log(sentence.search('because'))  // 31

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let Str=' 30 Days Of JavaScript '
console.log(Str.trim())  // 30 Days Of JavaScript

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.startsWith('30')) // true

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(challenge.endsWith('Script')) // true

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(challenge.match(/a/g)) // [ 'a', 'a', 'a' ]

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let firstHalf='30 Days of'
console.log(firstHalf.concat('JavaScript')) // 30 Days ofJavaScript

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(challenge.repeat(2)) // 30 Days Of JavaScript30 Days Of JavaScript

/* Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.'
 by John Holmes teaches us to help one another. */
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

/* Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." */ 
console.log('Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.')

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(typeof '10'== typeof 10)
console.log(typeof parseInt('10')== typeof 10) 

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(parseFloat('9.8')==10)
console.log(Math.ceil(parseFloat('9.8'))==10)

// Check if 'on' is found in both python and jargon
console.log('python'.includes('on')) // true
console.log('jargon'.includes('on')) // true

// I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log('I hope this course is not full of jargon.'.includes('jargon'))

// Random number between a range(min,max) 
// Math.floor(Math.random()*(max-min+1)+min) 

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*(100-0+1)+0))

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random()*(100-50+1)+50))

// Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random()*(255-0+1)+0))

// Access the 'JavaScript' string characters using a random number.
console.log('JavaScript'[Math.floor(Math.random()*('JavaScript'.length)+0)]) 

// Use console.log() and escape characters to print the following pattern.
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log("1\t1\t1\t1\t1\t")
console.log("2\t1\t2\t4\t8\t")
console.log("3\t1\t3\t9\t27\t")
console.log("4\t1\t4\t16\t64\t")
console.log("5\t1\t5\t25\t125\t")





