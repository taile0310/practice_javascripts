// Operator number
let a = 5;
let b = 10;

const sum = a + b; // result: 15
const difference = a - b; // result: -5
const product = a * b; // result: 50
const quotient = b / a; // result: 2
const remainder = b % a; // result: 0 divide by remainder (remainder when b is divided by a)
const increment = a++; // result of a: 6
const decrement = b--; // result of b: 9

// Operator assigment
let x = 10;
let y = 5;

x += y; // => x = x + y; result: 15
x -= y; // => x = x - y; result: 10
x *= y; // => x = x * y; result: 50
x /= y; // => x = x / y; result: 10
x %= y; // => x = x % y; result: 0

// Operator logic
const isTrue = true;
const isFalse = false;

const logicalAnd = isTrue && isFalse; // => false
const logicalOr = isTrue || isFalse; // => true
const logicalNot = !isTrue; // => false

// Operator string
let firstName = "Tai";
let lastName = "Le";

const fullName = firstName + " " + lastName;
console.log(fullName);

//Ternary Operator
const age = 20;
const isAdult = age >= 18 ? "Adult" : "Not adult";
console.log(isAdult); //  age = 20 > 18 => result: "Adult"
