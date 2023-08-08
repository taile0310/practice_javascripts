// how to create array

let arr = ['JS', 'Java', 'PHP', 'Python', 'React', 'Angular', undefined, null, function () {}, {}];
console.log(arr); // => array can contain all the data type
console.log(arr.length); // => length = 10

let arr2 = new Array('JS', 'Java', 'PHP', 'Python', 'React', 'Angular');
console.log(arr2);
console.log(arr2.length); // => length = 6

let arr3 = Array('JS', 'Java', 'PHP', 'Python', 'React', 'Angular');
console.log(arr3);

// manipulating with arrays: pop, push, unshift, shift, concat, splice

let arr4 = [1, 2, 3, 4];
arr4.pop(); // => remove element last
arr4.shift(); // => remove element first
arr4.push(5); // => add element last
arr4.unshift(6); // => add element first
arr4.splice(1, 1); // => remove element with index and quantity
arr4.splice(1, 0, 'Number'); // => but if quantity = 0 and pass the 3rd parameter means insert
arr4.splice(2, 1, 'JS'); // => but if quantity = 1 and pass the 3rd parameter means replace
console.log(arr4);

let arr5 = ['PHP', 'Java', 'React', 'Angular'];
console.log(arr5.concat(arr4)); // use concat string or array

const numbers = [1, 2, 3, 4, 5];

// map(): Create a new array by executing a function on each element of the original array and return the result
const doubled = numbers.map((num) => num * 2);
console.log('map: ' + doubled); // => [2, 4, 6, 8, 10]

// filter(): Creates a new array containing the elements of the original array that satisfy the specified condition.
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log('filter: ' + evenNumbers); // => [2, 4]

// reduce(): Integrate the elements of an array into a single value through the implementation of a built-in function.
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('reduce: ' + sum); // => 15

//forEach(): Performs a function on each element of the original array, but does not create a new array.
numbers.forEach((num) => console.log('forEach: ' + num));

//find(): Find the first element in the array that satisfies the condition.
const firstEven = numbers.find((num) => num % 2 === 0);
console.log('find: ' + firstEven); // => 2

//some & every: Checks if some or all elements of an array have opposite conditions.
const hasEven = numbers.some((num) => num % 2 === 0); // true
const allEven = numbers.every((num) => num % 2 === 0); // false

//sort(): Sort the elements in the array.
const arrNumbers = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = arrNumbers.sort((a, b) => a - b);
console.log('sort: ' + sorted); // => [1, 1, 2, 3, 4, 5, 6, 9]

//includes(): Checks if an element exists in the array.
const hasThree = arrNumbers.includes(3);
console.log('hasThree: ' + hasThree); // true

//indexOf() và lastIndexOf(): Find the first or last index of an element in the array.
const arrNumbers2 = [3, 1, 4, 6, 5, 9, 2, 1];

const firstIndex = arrNumbers2.indexOf(1);
console.log('firstIndex: ' + firstIndex);

const lastIndex = arrNumbers2.lastIndexOf(1);
console.log('lastIndex: ' + lastIndex);
