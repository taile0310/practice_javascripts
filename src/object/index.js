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
