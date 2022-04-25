// for loop

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// while loop

let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do-while loop

let j = 0;

do {
  console.log(j);
  j++;
} while (j < 5);

// for-of loop

const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

// for-in loop

const person = { fname: "John", lname: "Doe", age: 25 };

for (let x in person) {
  console.log(`${x} : ${person[x]}`);
}

for (let x in numbers) {
  console.log(`numbers[${x}]= ${numbers[x]}`);
}

// for each loop
// array.forEach(function(currentValue, index, arr))

const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  console.log(`${index} : ${item}`);
}

// continue

for (let x = 0; x < 7; x++) {
  if (x % 2 == 1) continue;
  console.log(x);
}

// break

for (let x = 2; x < 8; x++) {
  if (5 % x == 0) break;
  console.log(x);
}
