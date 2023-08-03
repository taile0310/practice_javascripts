/**
 * difference between var and let, const: scpoe, hosting.
 */

// SCOPE
// var can accessible outside the block
{
  var demoVar = "Javascript";
}
console.log(demoVar); // => Javascript

// let and const inaccessible outside the block
{
  let demoLet = "Javascript variables";
  console.log(demoLet); // => Javascript variables
}
console.log(demoLet); // =>  Error: str is not defined

/**
 * difference between const and let, var: assigment.
 */

// ASSIGMENT
// var and let
var a = 1;
a = 100;
console.log(a);

let b = 2;
b = 200;
console.log(b);

// const
const c = 3;
c = 300;
console.log(c); // => Error: Assignment to constant variable.;

// but suppose I have const "d" with properties "name",
// it will be assignable because here it will be assigned to the properties "name" ,
// not directly to the const "d"
const d = {
  name: "Javascript",
};

d.name = "Java";

console.log(d.name); // => Java
