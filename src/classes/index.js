// Class
class Person {
  //constructor is special method used to initialize an object and is created in the class.
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  //setter is called through the assignment operator
  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  setCity(city) {
    this.city = city;
  }

  //getter is called when accessing the property value.
  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getCity() {
    return this.city;
  }

  //Use "this" to refer to an object
  hello() {
    console.log(`My name is ${this.name}`);
  }

  go(goTo) {
    console.log(goTo);
  }
}

class Employee extends Person {
  constructor(name, age, city, position, salary) {
    super(name, age, city);
    this.position = position;
    this.salary = salary;
  }
}
const employee = new Employee('Linh Nguyen', 20, 'HCM', 'marketing', '5000000');
console.log(employee);
employee.go('I go to work by bycicle');

class Customer extends Person {
  constructor(name, age, city, customerType, numberPhone) {
    super(name, age, city);
    this.customerType = customerType;
    this.numberPhone = numberPhone;
  }
}
const customer = new Customer('Mai Nguyen', 25, 'Da Nang', 'Diamond', '0935310330');
const customer1 = {};
console.log(customer);
customer.go('I go to play by car');

//use "instanceof" check object type
console.log(customer instanceof Customer);
console.log(customer1 instanceof Customer);
