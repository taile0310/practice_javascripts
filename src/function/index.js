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
