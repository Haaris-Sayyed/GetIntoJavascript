// How to create an empty array

// Using array constructor

const array = Array();
console.log(array); // []

// Using square brackets([ ])

const array1 = [];
console.log(array1); // []

// How to create an array with values

const numbers = [0, 3.14, 9.81, 37, 98.6, 100];
console.log("Numbers:", numbers);
console.log("Number of numbers:", numbers.length);

const webTechs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongDB"];
console.log("webTechs:", webTechs);
console.log("Number of webTechs:", webTechs.length);

// Creating an array using split
let js = "JavaScript";
const charsInavaScript = js.split("");
console.log(charsInavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// Accessing array items using index
const digitArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let firstIndex = 0;
let lastIndex = digitArray.length - 1;
console.log(digitArray[firstIndex]); // 1
console.log(digitArray[5]); // 6
console.log(digitArray[lastIndex]); // 9

// Modifying array element
digitArray[0] = 100;
console.log(digitArray);

// Methods to manipulate array

// Array Constructor
const arr = Array(); // creates an an empty array
console.log(arr);

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]

// Creating static values with fill
const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0); // it creates eight element values filled with '0'
console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

// Concatenating array using concat
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList); // [1, 2, 3, 4, 5, 6]

// Getting array length
console.log(thirdList.length); // 6

// Getting index of an element in array
console.log(thirdList.indexOf(4)); // 3
console.log(thirdList.indexOf(10)); // -1

// Getting last index of an element in array
const Numbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(Numbers.lastIndexOf(2)); // 7
console.log(Numbers.lastIndexOf(0)); // -1

// includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
console.log(Numbers.includes(4)); // true
console.log(Numbers.includes(0)); // false

// Checking array
console.log(Array.isArray([1, 2, 3, 4, 5])); // true
console.log(Array.isArray(100)); // false

// Converting array to string
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

// Joining array elements
console.log(names.join()); // Asabeneh,Mathias,Elias,Brook
console.log(names.join("")); //AsabenehMathiasEliasBrook
console.log(names.join(" ")); //Asabeneh Mathias Elias Brook
console.log(names.join(", ")); //Asabeneh, Mathias, Elias, Brook
console.log(names.join(" # ")); //Asabeneh # Mathias # Elias # Brook

// Slice array elements
console.log(names.slice()); // -> it copies all  item
console.log(names.slice(0)); // -> it copies all  item
console.log(names.slice(0, names.length)); // it copies all  item
console.log(names.slice(1, 3)); // -> [ 'Mathias', 'Elias' ] // it doesn't include the ending position

// Splice method in array
// It takes three parameters:Starting position, number of times to be removed and number of items to be added.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(1, 2, "Lemon", "Kiwi");
console.log(fruits);

const a = ["item1", "item2", "item3"];

// Adding item to an array using push
a.push("new item");
console.log(a); // ['item1', 'item2','item3','new item']

// Removing the end element using pop
a.pop();
console.log(a); // ['item1', 'item2','item3']

// Removing an element from the beginning
a.shift();
console.log(a); // ['item2','item3']

// Add an element from the beginning
a.unshift("new item");
console.log(a); // [ 'new item', 'item2', 'item3' ]

// Reversing array order
console.log(a.reverse()); // [ 'item3', 'item2', 'new item' ]

// Sorting elements in array
const Techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

Techs.sort();
console.log(Techs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

Techs.reverse(); // after sorting we can reverse it
console.log(Techs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// Array of arrays

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]


