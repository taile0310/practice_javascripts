/**
 * how to create objects from
 * use {} (literal)
 * use "new"
 * user static methods
 */

// use {}
const user = {
  name: 'Tai Le',
  age: 23,
};

// Object => use keyword "new"
function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
}

const person = new Person('Tai Le', 23, 'Da Nang');
console.log(person);

// Object => use method create: it only useful for customization when creating objects
// but it can not add much properties compare to use constructor directly.
// user static method
Person.create = function (name, age, city) {
  return new Person(name, age, city);
};

const person1 = Person.create('Thanh Truc', 23, 'Dak Lak');
console.log(person1);

// Object properties and objects method
const car = {
  name: 'City Honda',
  company: 'Honda',
  color: 'Red',
  typeCar: 'C',
  go: function () {
    console.log('Car going.');
  },
  stop: function () {
    console.log('Car stopping.');
  },
};
console.log(car.name, car.company);

car.go();
car.stop();

//keys(), values(), entries(): Generates iterators for the keys, values, and [key, value] pairs of the array.
const keysIterator = Object.keys(car); // Iterator for key
console.log(keysIterator);

const valuesIterator = Object.values(car); // Iterator for value
console.log(valuesIterator);

const entriesIterator = Object.entries(car); // Iterator for [key, value]
console.log(entriesIterator);

//assign(): used to copy the values ​​of all enumerable properties from one or more source objects to a target object. It will return that target object.
// parameter: taget => {}, source.
const additionalInfo = {
  city: 'New York',
};

const extendedCar = Object.assign({}, car, additionalInfo);
console.log('Extended Car:', extendedCar);

//Let's say I have 2 objects with the same properties => obj2 overide obj1 and left -> right.
const obj1 = {
  name: 'Tai Le',
  age: 23,
  city: 'Da Nang',
  companyName: 'Agility',
};

const obj2 = {
  name: 'Thanh Truc',
  age: 22,
  city: 'Dak Lak',
  phone: '0909520020',
};
const demoAssign = Object.assign({}, obj1, obj2);
console.log('Demo Assign:', demoAssign);
