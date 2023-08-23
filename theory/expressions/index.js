// Expressions
// Expressions number

const a = 5;
const b = 10;
const sum = a + b;
const product = a * b;
const result = (a + b) * 2;

// Expressions string

const firstName = 'Tai';
const lastName = 'Le';

const fullName = firstName + ' ' + lastName;
console.log(fullName);

const greeting = `Hi, ${fullName}!`;
console.log(greeting);

// Expressions logic return result true or false

const age = 23;
const isAdult = age >= 18;
const isStudent = true;
const canDriveCar = isAdult || !isStudent;
console.log(canDriveCar); // => || only 1 condition is true return result true

const notCanDriveCar = isAdult && !isStudent;
console.log(notCanDriveCar); // => all conditions must be true return return false

// Expressions function
function multiply(a, b) {
  return a * b;
}
const resultNumber = multiply(3, 4);
console.log(resultNumber);

//Expressions Array and Object

const numbers = [1, 2, 3, 4, 5]; // => Array
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total); // => total array: 15

const person = { name: 'Alice', age: 30 }; // => Object
const properties = Object.keys(person);
console.log(properties); // get key of object person
