// function => not parameter
function mess() {
  console.log('Hello everybody');
}
mess();

// function with parameter => it can pass many parameters and unlimited data types
function callMess(message) {
  console.log(message);
}
callMess('Hi everybody');

// function with return
function sum(num, num2) {
  return num + num2;
}
const result = sum(3, 5);
console.log(result); // Output: 8

// arrow function => not parameter
const mess1 = () => {
  console.log('Hello everybody, this is arrow function');
};
mess1();

// arrow function with parameter
const callMess1 = (message) => {
  console.log(message);
};
callMess1('Hi everybody, this is arrow function');

// arrow function with return
const sum1 = (num3, num4) => {
  return num3 + num4;
};
let result1 = sum(5, 5);
console.log(result1);
