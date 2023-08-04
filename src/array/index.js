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
