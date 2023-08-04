// Example: for loop
for (let i = 1; i <= 5; i++) {
  // console.log(i);
}
let i = 1;

// Example: while loop

while (i <= 5) {
  console.log(i);
  i++;
}

// Example: do-while loop`
do {
  console.log(i);
  i++;
} while (i <= 5);

// Example: for...of loop
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num);
}

// Example: forEach method => a method in Js.
const fruits = ['apple', 'banana', 'orange'];
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Example: for...in loop => used to iterate over all properties of an object
const person = { name: 'John', age: 30, city: 'New York' };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
